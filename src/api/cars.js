import { api } from "./apiClient";

export const carsApi = {
  getAll: ({ limit = 10 } = {}) =>
    api.get("/cars", { params: { _limit: limit } }),

  getById: (id) => api.get(`/cars/${id}`, { params: { _embed: "carType" } }),
};
