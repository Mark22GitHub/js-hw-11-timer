// ========Таймер обратного отсчета======

const day = document.querySelector('[data-value="days"]');
const hour = document.querySelector('[data-value="hours"]');
const min = document.querySelector('[data-value="mins"]');
const sec = document.querySelector('[data-value="secs"]');

const targetDate = new Date('Jan 01, 2022');


const reversedTimer = setInterval(() => {

  const currentDate = Date.now();
  const time = targetDate - currentDate;

  updateClockFace(time);
  expiredDate(time);

}, 1000);

function updateClockFace(time) {

const days = pad(Math.floor(time / (1000 * 60 * 60 * 24))) ;
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));  
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));  
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  day.textContent = `${days}`;
  hour.textContent = `${hours}`;
  min.textContent = `${mins}`;
  sec.textContent = `${secs}`;

  function pad(value) {
    return String(value).padStart(2, '0');
  }
}

function expiredDate(time) {
    if (time < 0) {
    clearInterval(reversedTimer);
     updateClockFace(0);
    alert('Your time has already been EXPIRED');
  }
  }
