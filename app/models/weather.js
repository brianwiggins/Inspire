export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    this.city = data.name
    this.kelvin = data.main.temp
    this.celsius = this.getCelisus();
    this.farenheit = this.getFarenheit();
    this.humidity = data.main.humidty;
    this.description = data.weather[0].main
  }
  getFarenheit() {
    let farenheit = Math.round((9 / 5) * (this.celsius) + 32);
    return farenheit;
  }

  getCelisus() {
    let celcius = Math.round(this.kelvin + 273.15);
    return celcius;
  }
}