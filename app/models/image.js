export default class Image {
  constructor(data) {
    this.url = data.url
    this.source = data.site;
  }
  get ImageTemplate() {
    return `<span style="font-weight:lighter;color:white;">Image Source: ${this.source}</span><br><span style="font-weight:lighter;color:black;">Image Source: ${this.source}</span>`
  }
}