import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:4000/api" : "http://13.203.221.235:4000/api",
  withCredentials: true,
});
