import axios from "axios";

const publicRequest = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "x-api-key": import.meta.env.VITE_APP_API_KEY,
    "Content-Type": "application/json",
  },
});

export default publicRequest;
