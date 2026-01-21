import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:4000/api" : "http://43.204.196.183:4000/api",
  withCredentials: true,
});
