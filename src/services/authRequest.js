import axios from "axios";

const authToken = localStorage.getItem("token");
console.log("auth : ", authToken);

const authRequest = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "x-api-key": import.meta.env.VITE_APP_API_KEY,
    "Content-Type": "application/json",
  },
});

authRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default authRequest;
