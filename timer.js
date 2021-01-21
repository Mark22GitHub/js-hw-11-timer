
// ========Таймер обратного отсчета======


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











//   new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });




// ===================

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






// =======CLASS-v.1=========

// class CountdownTimer {
//   constructor({selector, targetDate}) {
//     //   this.selector = document.querySelector(selector);
//       this.targetDate = targetDate.getTime()


// this.day = document.querySelector( `${selector} [data-value="days"]`);
// this.hour = document.querySelector(`${selector} [data-value="hours"]`);
// this.min = document.querySelector(`${selector} [data-value="mins"]`);
// this.sec = document.querySelector(`${selector} [data-value="secs"]`);
      
      
      
      
//  this.timer =  setInterval(() => {
//             // Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.
//             const currentDate = Date.now();
//             const time = this.targetDate - currentDate;

//    if (time < 0) {
//      clearInterval(this.timer);
//       alert('Your time has already been EXPIRED');
//      return;
//     //  updateClockFace(0);
   
//   }
   
//             // updateClockFace(time);
//             // expiredDate(time);

  
//    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24))) ;
// const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));  
// const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));  
// const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   this.day.textContent = `${days}`;
//   this.hour.textContent = `${hours}`;
//   this.min.textContent = `${mins}`;
//   this.sec.textContent = `${secs}`;

//   function pad(value) {
//     return String(value).padStart(2, '0');
//         }
   
   
    
   
//         }, 1000);
    
    
    
   
    
    
// } 


//   }
  
      



//  const t = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2021'),
// });

// console.log(t);

// ======================















class CountdownTimer {
  constructor({selector, targetDate}) {
    
    this.targetDate = targetDate.getTime()

this.day = document.querySelector( `${selector} [data-value="days"]`);
this.hour = document.querySelector(`${selector} [data-value="hours"]`);
this.min = document.querySelector(`${selector} [data-value="mins"]`);
this.sec = document.querySelector(`${selector} [data-value="secs"]`);
    // this.p = document.querySelector(`${selector} p`);
      
    this.reversedTimer();
        }
      
  
  findDifference() {
    const currentDate = new Date().getTime();
    // const futureDate = this.targetDate;
    const time = this.targetDate - currentDate;
    time > 0 ? this.updateClockFace(time) : this.expiredDate(time);
  }
  
  reversedTimer() {
    this.findDifference();
        setInterval(() => {
            // Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.
            this.findDifference();

            // this.updateClockFace();
            // this.expiredDate();

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
    clearInterval(this.reversedTimer);
     this.updateClockFace(0);
    // alert('Your time has already been EXPIRED');
      // this.p.textContent = 'Your time has already been EXPIRED';
  }
  }
      
      
     
} 




  const t = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2022'),
});

console.log(t);