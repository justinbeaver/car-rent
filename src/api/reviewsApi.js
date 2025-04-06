import { api } from "./apiClient";

export const reviewsApi = {
  getByCarId: (id, { page = 1, perPage = 10 } = {}) =>
    api.get("/reviews", {
      params: { carId: id, _embed: "user", _page: page, _per_page: perPage },
    }),
};
