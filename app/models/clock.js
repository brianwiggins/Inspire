export default class Clock {
  constructor(data) {
    this.dateObject = new Date();
    this.date = this.dateObject.getDate();
    this.AM = true;
    this.hours = this.getTimeHours();
    this.minutes = this.dateObject.getMinutes();
    this.day = this.getDayofWeek();
    this.year = this.dateObject.getFullYear();

  }
  getTimeHours() {
    let hours = this.dateObject.getHours();
    if (hours >= 13) {
      hours -= 12;
      this.AM = false;
    }
    return hours;
  }
  getDayofWeek() {
    let dayNum = this.dateObject.getDay();
    let day;
    switch (dayNum) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
    }
    return day;
  }

  showAMPM() {
    if (this.AM) {
      return "AM"
    } else { return "PM" }
  }

  get ClockTemplate() {
    return `
    <div class="card bg-transparent">
    <div class="card-body">
    <h1 class="card-title">${this.hours}:${this.minutes}<small class="text-lighter"> ${this.showAMPM()} <small class="text-lighter"> </small>Local Time</small></h1>
    </div>
    </div>
    `
  }

}