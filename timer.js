// Таймер обратного отсчета
// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.

// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.

// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

// // Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.

// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);



// ========Таймер обратного отсчета======

// const timer = document.querySelector('#timer-1');
const day = document.querySelector('[data-value="days"]');
const hour = document.querySelector('[data-value="hours"]');
const min = document.querySelector('[data-value="mins"]');
const sec = document.querySelector('[data-value="secs"]');


const targetDate = new Date('Jan 01, 2022');


const reversedTimer = setInterval(() => {
// Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.
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










// const timer = {
//     intervalId: null,
//     isActive: false,

//     start() {

//         if (this.isActive) {
//             return;
//         }

//         this.isActive = true;
//         const startTime = Date.now();
//         console.log(startTime); // start point

//         updateClockface(0);

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             console.log(deltaTime);

//             updateClockface(deltaTime);
//         }, 1000);
//     },


//     stop() {
//         clearInterval(this.intervalId) 
//             this.intervalId = null;
//             this.isActive = false;
//             updateClockface(0);
//     },

// };


// // start.addEventListener('click, ')
// // stop.addEventListener('click, ')


// function updateClockface(time) {
//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24))) ;
    
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   // clockface.textContent = `${days} : ${hours} : ${mins} : ${secs}`; // <p> Отрисовка <p>
  
//   days.textContent = `${days} :`;
//   hours.textContent = `${hours} :`;
//   mins.textContent = `${mins} :`;
//   secs.textContent = `${secs} :`;
// }

// function pad(value) {
//     return String(value).padStart(2, '0');
// }

// ===============