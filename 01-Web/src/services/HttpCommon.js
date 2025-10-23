import axios from "axios";

const BACKENDSERVER='www.eduardkb.website';

export default axios.create({
  baseURL: `https://${BACKENDSERVER}/api`,
  headers: {
    "Content-type": "application/json"
  }
});
