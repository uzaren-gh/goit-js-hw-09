import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    startFunction();
  },
};

const starT = document.querySelector('button[data-start]');
starT.disabled = true;
// document.querySelector("#datetime-picker").value = "2024-01-01 00:00:00";
// лорлр

flatpickr('#datetime-picker', options);

function startFunction() {
  starT.disabled = false;
  starT.textContent = 'Start';
  starT.addEventListener('click', countdown);
}
// startFunction();

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

// console.log("date:", date);

// const specifiedDate = new Date("2024-01-01 00:00:00");

// console.log(specifiedDate.getTime());

// const specifiedDate = dataFromInput;

function countdown() {
  starT.textContent = 'Stop';
  starT.removeEventListener('click', countdown);
  const dataFromInput = document.querySelector('#datetime-picker').value;
  let specifiedDate = Date.parse(dataFromInput);
  starT.addEventListener('click', () => {
    clearTimeout(timeout);
    startFunction();
  });

  let dateNow = new Date(),
    // date = specifiedDate.getTime() - dateNow.getTime(),
    date = specifiedDate - dateNow.getTime(),
    timeout = 0;

  let { days, hours, minutes, seconds } = convertMs(date);

  if (date <= 0) return alert('Please choose a date in the future!');

  document.querySelector('span[data-days]').innerHTML = days;

  if (hours < 10) hours = '0' + hours;
  document.querySelector('span[data-hours]').innerHTML = hours;

  if (minutes < 10) minutes = '0' + minutes;
  document.querySelector('span[data-minutes]').innerHTML = minutes;

  if (seconds < 10) seconds = '0' + seconds;
  document.querySelector('span[data-seconds]').innerHTML = seconds;

  timeout = setTimeout(countdown, 1000);
}
