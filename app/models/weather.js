export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    this.city = data.name
    this.kelvin = data.main.temp
    this.celsius = this.getCelisus();
    this.farenheit = this.getFarenheit();
    this.humidity = data.main.humidity;
    this.imgUrl = this.getImgUrl();
    this.desc = this.getWeatherDesc();



  }
  getFarenheit() {
    let farenheit = Math.round((9 / 5) * (this.celsius) + 32);
    return farenheit
  }

  getCelisus() {
    let celcius = Math.round(this.kelvin - 273.15);
    return celcius;
  }

  /*
  *need to access data.weather to get description and icon
  */
  getWeatherDesc() {//get description
    let desc
    return desc;
  }
  getImgUrl() {//get weather Icon and convert to URL. URL format=> http://openweathermap.org/img/wn/ICON@2x.png

  }

  get WeatherTemplate() {
    return `
    <div class="card bg-transparent">
      <img src="${this.imgUrl}" class="card-img-top" alt="☁️">
      <div class="card-body">
        <h3 class="card-title">${this.city}</h3>
        <h4 class="card-subtitle"${this.desc}></h4>
        <h5 class="card-text">${this.farenheit}°F / ${this.celsius}°C <br> Humidity: ${this.humidity}%</h5>
      </div>
    </div>
        
    `
  }


}