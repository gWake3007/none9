// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

const refs = {
  form: document.querySelector('.form'),
  button: document.querySelector('button'),
};

refs.button.addEventListener("click", clickSubmit);

function clickSubmit(event) {
  event.preventDefault();
  const inputDelay = refs.form.elements.delay.value;
  const inputStep = refs.form.elements.step.value;
  const inputAmount = refs.form.elements.amount.value;
  console.log(inputDelay);
  console.log(inputStep);
  console.log(inputAmount);
}