import { api } from "@/api/apiClient";

export const getById = ({ id }) => {
  return api.get(`/cars/${id}`);
};
