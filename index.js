const daysEl = document.querySelector('span[data-value="days"]');
const hoursEl = document.querySelector('span[data-value="hours"]');
const minsEl = document.querySelector('span[data-value="mins"]');
const secsEl = document.querySelector('span[data-value="secs"]');

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
class CountdownTimer {
  constructor({startTimer, targetDate}) {
    this.targetDate = targetDate;
    this.intervalId = null;
    this.startTimer = startTimer;
  }

  start() {
  
    this.intervalId = setInterval(() => {
      const time = this.targetDate - Date.now();
      const timeLeft = this.getTimeComponents(time);
      this.startTimer(timeLeft);
    }, 1000);
   }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
    return {days, hours, mins, secs};
  }
  
  pad(value) {
  return String(value).padStart(2, '0');
}
}

const timer = new CountdownTimer({
  targetDate: new Date('Jul 17, 2021'),
  startTimer: updateClockface,
});


function updateClockface({days, hours, mins, secs}) {
  daysEl.textContent = `${days}`;
  hoursEl.textContent = `${hours}`;
  minsEl.textContent = `${mins}`;
  secsEl.textContent = `${secs}`;
}
timer.start();
