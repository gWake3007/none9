import Notiflix from "notiflix";

const form = document.querySelector('.form');

function createPromise(position, delay) {//?Функція яка приймає два параметри позицію промісу(його номер)і затримку між ними
  const promise = new Promise((resolve, reject) => { //?Створення промісу.
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {       //?Консолі які виводяться при різних промісах!
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
  return promise;
}

form.addEventListener('submit', clickSubmit);

function clickSubmit(event) {
  event.preventDefault();
  const inputDelay = form.elements.delay.value;
  const inputStep = form.elements.step.value;
  const inputAmount = form.elements.amount.value;
  let totalDelay = parseInt(inputDelay);  //?Переводимо тип данниї взятих з форми зі str в Number за допомогою parseInt().

  for(let i = 1; i <= inputAmount; i ++) {  //?За допомогою циклу оброблюємо і нумеруємо всі проміси.
    createPromise(i, totalDelay).then(resolve => console.log(resolve)).catch(reject => console.log(reject));
    totalDelay += parseInt(inputStep);
  }
}

// Notiflix.Notify.success("success");  //?Приклад роботи бібліотеки.Прості меседжи.
// Notiflix.Notify.warning("warning");
// Notiflix.Notify.failure("failure");
// Notiflix.Notify.info("info");