export default class Clock {
  constructor(data) {
    this.date = this.getDate()
    this.time = this.getTime();
  }
  getDate() {
    let newDate = new Date();
    let date = newDate.getMonth() + ' ' + newDate.getDate() + ', ' + newDate.getFullYear();
    return date;
  }
  getTime() {
    let newTime = new Date();
    let time = newTime.getHours() + ":" + newTime.getMinutes();
    return time;
  }
}