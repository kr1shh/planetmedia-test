import axios from "axios";

const authToken = localStorage.getItem("jwt")
const authRequest = axios.create({
    baseURL : import.meta.env.VITE_APP_API_URL,
    headers : {
        "x-api-key" : import.meta.env.VITE_APP_API_KEY,
        Authorization : `Bearer ${authToken}`,
        "Content-Type" : "application/json",
    }
})

export default authRequest