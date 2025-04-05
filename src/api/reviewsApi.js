import { api } from "./apiClient";

export const reviewsApi = {
  getByCarId: (id) =>
    api.get("/reviews", { params: { carId: id, _embed: "user" } }),
};
