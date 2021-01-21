class CountdownTimer {
  constructor({selector, targetDate}) {
    
    this.targetDate = targetDate.getTime()

this.day = document.querySelector( `${selector} [data-value="days"]`);
this.hour = document.querySelector(`${selector} [data-value="hours"]`);
this.min = document.querySelector(`${selector} [data-value="mins"]`);
this.sec = document.querySelector(`${selector} [data-value="secs"]`);
      
        }
      
    reversedTimer() {
        setInterval(() => {
            // Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.
            const currentDate = Date.now();
            const time = this.targetDate - currentDate;

            updateClockFace(time);
            expiredDate(time);

        }, 1000);
    };
        
        
    updateClockFace(time) {

const days = pad(Math.floor(time / (1000 * 60 * 60 * 24))) ;
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));  
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));  
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  this.day.textContent = `${days}`;
  this.hour.textContent = `${hours}`;
  this.min.textContent = `${mins}`;
  this.sec.textContent = `${secs}`;

  function pad(value) {
    return String(value).padStart(2, '0');
        }
        
}
  
    
    expiredDate(time) {
    if (time < 0) {
    clearInterval(reversedTimer);
     updateClockFace(0);
    alert('Your time has already been EXPIRED');
  }
  }
      
      
    
    
    
} 






  new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});











// const day = document.querySelector('[data-value="days"]');
// const hour = document.querySelector('[data-value="hours"]');
// const min = document.querySelector('[data-value="mins"]');
// const sec = document.querySelector('[data-value="secs"]');





// const targetDate = new Date('Jan 01, 2022');


// const reversedTimer = setInterval(() => {
// // Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.
//   const currentDate = Date.now();
//   const time = targetDate - currentDate;

//   updateClockFace(time);
//   expiredDate(time);

// }, 1000);


// function updateClockFace(time) {

// const days = pad(Math.floor(time / (1000 * 60 * 60 * 24))) ;
// const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));  
// const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));  
// const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   day.textContent = `${days}`;
//   hour.textContent = `${hours}`;
//   min.textContent = `${mins}`;
//   sec.textContent = `${secs}`;

//   function pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }

// function expiredDate(time) {
//     if (time < 0) {
//     clearInterval(reversedTimer);
//      updateClockFace(0);
//     alert('Your time has already been EXPIRED');
//   }
//   }
