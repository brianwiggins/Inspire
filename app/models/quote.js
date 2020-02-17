export default class Quote {
  constructor(data) {
    this.quote = data.quote.body || "loading Quote";
    this.author = data.quote.author || "loading Author";
  }

  get QuoteTemplate() {
    return `
    <div class = "card bg-dark">
      <div class="card-body"><p class="card-title">${this.quote}</p><br><p class="card-subtitle">     -${this.author}</p>
      </div>
    </div>
    `
  }
}