import { api } from "@/api/apiClient";

export const getByCarId = ({ carId, page, perPage } = {}) => {
  const params = { carId, _embed: "user", _page: page, _per_page: perPage };

  return api.get("/reviews", { params });
};
