
// new CountdownTimer({
  //   selector: '#timer-1',
  //   targetDate: new Date('Jul 17, 2019'),
  // });
  class CountdownTimer {
    constructor({targetDate}) {
      this.daysEl = document.querySelector('span[data-value="days"]');
      this.hoursEl = document.querySelector('span[data-value="hours"]');
      this.minsEl = document.querySelector('span[data-value="mins"]');
      this.secsEl = document.querySelector('span[data-value="secs"]');
      this.targetDate = targetDate;
      this.intervalId = null;
  }

  start() {
  
    this.intervalId = setInterval(() => {
      const time = this.targetDate - Date.now();
      const timeLeft = this.getTimeComponents(time);
      this.updateClockface(timeLeft);
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

updateClockface({days, hours, mins, secs}) {
  this.daysEl.textContent = `${days}`;
  this.hoursEl.textContent = `${hours}`;
  this.minsEl.textContent = `${mins}`;
  this.secsEl.textContent = `${secs}`;
}
}

const timer = new CountdownTimer({
  targetDate: new Date('Jul 17, 2021'),
});


timer.start();
