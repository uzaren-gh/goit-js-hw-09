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
  '-webkit-linear-gradient(top, #d6a5cc 100px, #C5DDE8 300px) no-repeat, #C5DDE8';
// 'linear-gradient(10deg, #d6a5cc, #C5DDE8)';
document.querySelector('#datetime-picker').textContent = '';

starT.disabled = true;

flatpickr('#datetime-picker', options);
function startFunction() {
  starT.disabled = false;
  starT.textContent = 'Start';
  starT.style.background = '#74d4a1';
  starT.addEventListener('click', countdown);
}

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

//функция приведения к формату "XX"
function addLeadingZero(obj) {
  for (let key in obj) {
    obj[key] = String(obj[key]).padStart(2, '0');
  }
  return obj;
}

function countdown() {
  starT.textContent = 'Stop';
  starT.style.background = '#d66060';
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

  let { days, hours, minutes, seconds } = addLeadingZero(convertMs(date));

  if (date <= 0)
    return Notiflix.Report.success(
      'Countdown is done.',
      'Please choose a new date (in the future).',
      'Ok'
    );

  document.querySelector('span[data-days]').innerHTML = days;

  // if (hours < 10) hours = '0' + hours; // можно обойтись без функции приведения к "XX"
  document.querySelector('span[data-hours]').innerHTML = hours;

  // if (minutes < 10) minutes = '0' + minutes;
  document.querySelector('span[data-minutes]').innerHTML = minutes;

  // if (seconds < 10) seconds = '0' + seconds;
  document.querySelector('span[data-seconds]').innerHTML = seconds;

  timeout = setTimeout(countdown, 1000);
}
