// ========================Class v.1============================

class CountdownTimer {
  constructor({ selector, targetDate }) {
this.targetDate = targetDate.getTime()

this.day = document.querySelector( `${selector} [data-value="days"]`);
this.hour = document.querySelector(`${selector} [data-value="hours"]`);
this.min = document.querySelector(`${selector} [data-value="mins"]`);
this.sec = document.querySelector(`${selector} [data-value="secs"]`);

this.reversedTimer();
        }
      
  findDifference() {
    const currentDate = new Date().getTime();
    const time = this.targetDate - currentDate;
    // time > 0 ? this.updateClockFace(time) : this.expiredDate(time);

    if (time > 0) {
      this.updateClockFace(time)
    } else {
      clearInterval(this.reversedTimer);
      this.updateClockFace(0);
    }
  }
  
  reversedTimer() {
    this.findDifference();
        setInterval(() => {
            this.findDifference();
        }, 1000);
    };
        
    updateClockFace(time) {
const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24))) ;
const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));  
const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));  
const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

  this.day.textContent = `${days}`;
  this.hour.textContent = `${hours}`;
  this.min.textContent = `${mins}`;
  this.sec.textContent = `${secs}`;

      this.pad();
      
    }
  
  pad(value) {
    return String(value).padStart(2, '0');
        } 
  
  
  //   expiredDate(time) {
  //   if (time < 0) {
  //   clearInterval(this.reversedTimer);
  //    this.updateClockFace(0);
  // }
  // }
        
} 


  new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('APR 22, 2021'),
});

// ===================




// =======CLASS-v.2=========

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
    
//   this.targetDate = targetDate.getTime()

// this.day = document.querySelector( `${selector} [data-value="days"]`);
// this.hour = document.querySelector(`${selector} [data-value="hours"]`);
// this.min = document.querySelector(`${selector} [data-value="mins"]`);
// this.sec = document.querySelector(`${selector} [data-value="secs"]`);
      
//  this.timer =  setInterval(() => {
//       const currentDate = Date.now();
//       const time = this.targetDate - currentDate;

//    if (time < 0) {
//      clearInterval(this.timer);
//       alert('Your time has already been EXPIRED');
//      return;
//   }

// const days = pad(Math.floor(time / (1000 * 60 * 60 * 24))) ;
// const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));  
// const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));  
// const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   this.day.textContent = `${days}`;
//   this.hour.textContent = `${hours}`;
//   this.min.textContent = `${mins}`;
//   this.sec.textContent = `${secs}`;

//   function pad(value) {
//     return String(value).padStart(2, '0');
//   }
//         }, 1000);
   
// } 
//   }
  

//  const t = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2021'),
// });
// console.log(t);

// ======================