import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:4000", //backend url to hit base
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default Axios;
