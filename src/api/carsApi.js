import { api } from "./apiClient";

export const carsApi = {
  getAll: ({ limit = undefined, page = undefined, perPage = undefined } = {}) =>
    api.get("/cars", {
      params: { _limit: limit, _page: page, _per_page: perPage },
    }),

  getById: (id) => api.get(`/cars/${id}`),

  getPopular: ({ limit = 5 } = {}) =>
    api.get("/popular", { params: { _limit: limit } }),

  getRecommended: ({ limit = 10 } = {}) =>
    api.get("/recommended", { params: { _limit: limit } }),
};
