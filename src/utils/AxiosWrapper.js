import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;
const baseURL = "https://shop.cbs.co.id/store-api/"
const instance = axios.create({
  baseURL
});
export const setAuth = (token) => {
  if (token) {
    instance.defaults.headers.common["Authorization"] = token;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
};
export default instance;
