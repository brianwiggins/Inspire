import store from "../store.js";
import Quote from "../models/quote.js"

// @ts-ignore
const quoteApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  async getQuote() {
    let res = await quoteApi.get("");
    console.log(res);
    store.commit("quote", new Quote(res.data));
  }
}

const quoteService = new QuoteService();
export default quoteService;
