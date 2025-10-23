import axios from "axios";

const BACKENDSERVER = "localhost:8090/api";

export default axios.create({
  baseURL: `http://${BACKENDSERVER}`,
  headers: {
    "Content-type": "application/json",
  },
});
