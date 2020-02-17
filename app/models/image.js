export default class Image {
  constructor(data) {
    this.url = data.url
    this.source = data.site;
  }
  get ImageTemplate() {
    return `<p style="font-weight:lighter; color:white;">Image Source: ${this.source}</p>`
  }
}