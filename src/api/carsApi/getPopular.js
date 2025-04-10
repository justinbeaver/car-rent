import { api } from "@/api/apiClient";

export const getPopular = ({ limit } = {}) => {
  const params = { _limit: limit };

  return api.get("/popular", { params });
};
