import Image from "../models/image.js"
import store from "../store.js";
// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {

  async getBackground() {
    console.log("finding a cool pic")
    let res = await imgApi.get("");
    console.log(new Image(res.data));
    store.commit("image", new Image(res.data));
  }
}

const imageService = new ImageService();
export default imageService;
