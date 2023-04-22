import Notiflix from 'notiflix';
import { Notify } from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

let inputedDelay, inputedStep, inputedAmount;

const form = document.querySelector('form');

// Notiflix.Notify.init({
//   closeButton: true,
// });

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget;
  inputedDelay = Number(delay.value);
  console.log('inputedDelay:', inputedDelay);
  inputedStep = Number(step.value);
  inputedAmount = Number(amount.value);

  for (let i = 1; i <= inputedAmount; i += 1) {
    createPromise(i, inputedDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
          position: 'center-center',
          closeButton: false,
          clickToClose: false,
          timeout: 5000,
        });
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
          position: 'center-center',
          closeButton: false,
          clickToClose: false,
          timeout: 5000,
        });
      });

    inputedDelay += inputedStep;
  }
}
