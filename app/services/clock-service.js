import store from "../store.js";
import Clock from "../models/clock.js"
class ClockService {
  getTime() {
    store.commit("clock", new Clock())
    setInterval(this.getTime, 5000)
  }
}

const clockService = new ClockService();
export default clockService;