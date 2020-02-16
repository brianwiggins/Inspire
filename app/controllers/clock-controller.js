import ClockService from "../services/clock-service.js";
import store from "../store.js";

function drawClock() {
  document.getElementById("clock").innerHTML = store.State.clock.ClockTemplate;
}
export default class ClockController {
  constructor() {
    store.subscribe("clock", drawClock);
    setInterval(drawClock, 60000)
    ClockService.getTime();
  }
}