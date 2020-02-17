import ClockService from "../services/clock-service.js";
import store from "../store.js";

function drawClock() {
  store.subscribe("clock", drawClock);
  document.getElementById("clock").innerHTML = store.State.clock.ClockTemplate;

}
export default class ClockController {
  constructor() {
    setInterval(drawClock, 30000)
    drawClock();

    ClockService.getTime();
  }
}