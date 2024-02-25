import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";

const flatpickr = require('flatpickr');

const refs = {
  input: document.getElementById('datetime-picker'),
  button: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('span[data-days]'),
  dataHours: document.querySelector('span[data-hours]'),
  dataMinutes: document.querySelector('span[data-minutes]'),
  dataSeconds: document.querySelector('span[data-seconds]'),
};

const currentDate = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates.length > 0) {
      const selectedDate = selectedDates[0];
      const days = selectedDate.getDay();
      const hours = selectedDate.getHours();
      const minutes = selectedDate.getMinutes();
      const seconds = selectedDate.getSeconds();
    }
  },
};

flatpickr(refs.input, options);

refs.button.addEventListener('click', clickEvent);

function clickEvent(event) {
  options.onClose();
}

