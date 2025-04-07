import { api } from "./apiClient";

export const carsApi = {
  getAll: ({ limit = 10 } = {}) =>
    api.get("/cars", { params: { _limit: limit } }),

  getById: (id) => api.get(`/cars/${id}`),

  getPopular: ({ limit = 5 } = {}) =>
    api.get("/popular", { params: { _limit: limit } }),

  getRecommended: ({ limit = 10 } = {}) =>
    api.get("/recommended", { params: { _limit: limit } }),
};
