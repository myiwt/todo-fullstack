import axios from "axios";
import { BASE_SERVER_URL } from "./configs";

export default axios.create({
  baseURL: BASE_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
