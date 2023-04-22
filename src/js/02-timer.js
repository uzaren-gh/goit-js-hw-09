import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import 'flatpickr/dist/themes/dark.css';
import { Russian } from 'flatpickr/dist/l10n/ru.js';
require('flatpickr/dist/themes/dark.css');
import Notiflix from 'notiflix';
Notiflix.Notify.init({
  position: 'center-top',
  width: '480px',
  fontSize: '25px',
  fontFamily: 'Roboto',
  clickToClose: true,
  timeout: 3000,
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  allowInput: true,
  locale: Russian,

  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    // console.log(options.defaultDate);
    if (selectedDates[0] < options.defaultDate) {
      starT.disabled = true;
      return Notiflix.Notify.warning('Please, choose a date in the FUTURE!');
      // alert('Please, choose a date in the FUTURE!');
    }
    startFunction();
  },
};

const starT = document.querySelector('button[data-start]');
document.querySelector('body').style.background =
  'linear-gradient(0deg, #EECFBA, #C5DDE8)';
document.querySelector('#datetime-picker').textContent = '';

starT.disabled = true;
// document.querySelector("#datetime-picker").value = "2024-01-01 00:00:00";

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
    date = specifiedDate - dateNow.getTime(),
    timeout = 0;

  let { days, hours, minutes, seconds } = convertMs(date);

  if (date <= 0)
    return Notiflix.Report.success(
      'Countdown is done.',
      'Please choose a new date (in the future).',
      'Ok'
    );

  document.querySelector('span[data-days]').innerHTML = days;

  if (hours < 10) hours = '0' + hours;
  document.querySelector('span[data-hours]').innerHTML = hours;

  if (minutes < 10) minutes = '0' + minutes;
  document.querySelector('span[data-minutes]').innerHTML = minutes;

  if (seconds < 10) seconds = '0' + seconds;
  document.querySelector('span[data-seconds]').innerHTML = seconds;

  timeout = setTimeout(countdown, 1000);
}
