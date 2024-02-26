import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const flatpickr = require('flatpickr');

const refs = {
  input: document.getElementById('datetime-picker'),
  button: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('span[data-days]'),
  dataHours: document.querySelector('span[data-hours]'),
  dataMinutes: document.querySelector('span[data-minutes]'),
  dataSeconds: document.querySelector('span[data-seconds]'),
};

refs.button.disabled = true;

let timerInterval = null; //?Потрібен для скасування інтервалу коли закінчеться час.Щоб відлік дойшов тільки до 0.
let targetDate;
let currentDate = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < currentDate) {
      alert('Please choose a date in the future');
    } else {
      refs.button.disabled = false;
      targetDate = selectedDates[0];
    }
  },
};

refs.button.addEventListener('click', clickEvent);

flatpickr(refs.input, options);

function clickEvent() {
  timerInterval = setInterval(() => {
    let date = new Date(); //?Тут створюємо нову дату let щоб в інтервалі шов відлік кожну секунду.
    const { days, hours, minutes, seconds } = convertMs(
      //?Деструкторизацією дістаємо всі значення.
      targetDate.getTime() - date.getTime()
    );

    if (targetDate.getTime() - date.getTime() < 920) {
      //?Перевірка чи не залишилося до кінця таймеру меньше 1000 мілісекунд.
      clearInterval(timerInterval); //?Скасування інтервалу.
      refs.button.disabled = true;
    }

    refs.dataDays.textContent = correctDate(days);
    refs.dataHours.textContent = correctDate(hours);
    refs.dataMinutes.textContent = correctDate(minutes);
    refs.dataSeconds.textContent = correctDate(seconds);
  }, 1000);
}

function convertMs(ms) {
  //?Функція для переведення з getTime() - в дату.
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

function correctDate(value) {
  //?Функція для конвертації дати і часу до формату двух чисел(приклад: 02).
  return value.toString().padStart(2, 0);
}
