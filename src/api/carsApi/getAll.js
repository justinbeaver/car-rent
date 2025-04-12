import { api } from "@/api/apiClient";

const normalizeComparisonFilters = ({ key, values = [] }) => {
  const prefixMap = {
    gt_: "_gt",
    gte_: "_gte",
    lt_: "_lt",
    lte_: "_lte",
    ne_: "_ne",
  };

  const prefixEntries = Object.entries(prefixMap);
  const processedValues = Array.isArray(values) ? values : [values];

  const params = {};

  processedValues.forEach((value) => {
    if (typeof value !== "string") {
      return;
    }

    if (!isNaN(parseInt(value))) {
      params[key] = params[key] || [];
      params[key].push(parseInt(value));
    } else {
      for (const [prefix, suffix] of prefixEntries) {
        if (value.startsWith(prefix)) {
          const numValue = parseInt(value.replace(prefix, ""));
          if (!isNaN(numValue)) {
            params[`${key}${suffix}`] = numValue;
          }
          break;
        }
      }
    }
  });

  return params;
};

export const getAll = ({
  limit,
  page,
  perPage,
  type,
  capacity,
  price,
} = {}) => {
  const capacityFilters = normalizeComparisonFilters({
    key: "specifications.capacity",
    values: capacity,
  });
  const priceFilters = normalizeComparisonFilters({
    key: "price",
    values: price,
  });

  const params = {
    _limit: limit,
    _page: page,
    _per_page: perPage,
    type,
    ...capacityFilters,
    ...priceFilters,
  };

  return api.get("/cars", { params });
};
