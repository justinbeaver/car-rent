import { getAll } from "./carsApi/getAll";
import { getById } from "./carsApi/getById";
import { getPopular } from "./carsApi/getPopular";
import { getRecommended } from "./carsApi/getRecommended";

export const carsApi = {
  getAll,
  getById,
  getPopular,
  getRecommended,
};
