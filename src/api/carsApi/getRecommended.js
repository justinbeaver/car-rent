import { api } from "@/api/apiClient";

export const getRecommended = ({ limit } = {}) => {
  const params = { _limit: limit };

  return api.get("/recommended", { params });
};
