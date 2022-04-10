import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formSubmit = document.querySelector('.form');
const delay = document.querySelector('input[name=delay]');
const step = document.querySelector('input[name=step]');
const amount = document.querySelector('input[name=amount]');

formSubmit.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const delayStep = Number(step.value);
  let amountInterval = 0;
  let delayValue = Number(delay.value);
  const intervalId = setInterval(() => {
    amountInterval += 1;
    if (amount.value < amountInterval) {
      clearInterval(intervalId);
      return;
    }
    createPromise(amountInterval, delayValue).then(onMakeFulfilled).catch(onMakeRejected);
    delayValue += delayStep;
  }, delayStep);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

function onMakeFulfilled(result) {
  Notify.success(result);
}
function onMakeRejected(error) {
  Notify.failure(error);
}
