
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const elements = {
  input: document.querySelector('#datetime-picker'),
  button: document.querySelector('button'),
  timer: document.querySelector('.timer'),
  field: document.querySelector('.field'),
  value: document.querySelector('.value'),
  label: document.querySelector('.label'),
  days: document.querySelector('.days'),
  hours: document.querySelector('.hours'),
  minutes: document.querySelector('.minutes'),
  seconds: document.querySelector('.seconds')
}

let userSelectedDate = null;
elements.button.disabled = true
const currentTime = new Date().getTime()

flatpickr('input#datetime-picker', { 
    locale: { firstDayOfWeek: 1 },
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      onCloseFunc(selectedDates[0]);
  },
})


function onCloseFunc(selectedDate) {
  if (selectedDate.getTime() > currentTime) {
    userSelectedDate = selectedDate.getTime()
    elements.button.disabled = false
  } else {
    iziToast.warning({
    message: 'Please choose a date in the future'})
    elements.button.disabled = true
  }
 
}



elements.button.addEventListener('click', handleClick) 

function handleClick(evt) {
  const id = setInterval(() => {
    const currentTime = new Date().getTime()
    const remainingTime = userSelectedDate - currentTime

    if (remainingTime <= 0) {
      clearInterval(id)

      elements.days.textContent = '00'
      elements.hours.textContent = '00'
      elements.minutes.textContent = '00'
      elements.seconds.textContent = '00'
      return
    }

    const timeComponents = convertMs(remainingTime)
  
    elements.days.textContent = addLeadingZero(timeComponents.days)
    elements.hours.textContent = addLeadingZero(timeComponents.hours)
    elements.minutes.textContent = addLeadingZero(timeComponents.minutes)
    elements.seconds.textContent = addLeadingZero(timeComponents.seconds)


  
  }, 1000)
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0')
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