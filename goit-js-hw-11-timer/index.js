class CountdownTimer {
  constructor({ selector, targetDate, time = 0 }) {
    this.selector = document.querySelector(selector);
    this.refs = {
      days: this.selector.querySelector('span[data-value="days"]'),
      hours: this.selector.querySelector('span[data-value="hours"]'),
      mins: this.selector.querySelector('span[data-value="mins"]'),
      secs: this.selector.querySelector('span[data-value="secs"]'),
    };

    setInterval(() => {
      time = targetDate - Date.now();
      this.refs.days.textContent = this.getDay();
      this.refs.hours.textContent = this.getHours();
      this.refs.mins.textContent = this.getMins();
      this.refs.secs.textContent = this.getSec();
    }, 1000);
  }

  getDay() {
    const days = Math.floor(this.time / (1000 * 60 * 60 * 24));
    return days;
  }
  getHours() {
    const hours = Math.floor(
      (this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    return hours;
  }
  getMins() {
    const mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
    return mins;
  }
  getSec() {
    const secs = Math.floor((this.time % (1000 * 60)) / 1000);
    return secs;
  }
}
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Mar 23, 2020'),
});
new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Feb 25, 2021'),
});
