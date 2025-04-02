import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
  paramsSerializer: {
    indexes: null,
  },
});

api.interceptors.response.use(
  (response) => response.data
  // (error) => {
  //   console.log(error.status, "error");
  //   return Promise.reject(error);
  // }
);
