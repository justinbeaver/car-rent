import { api } from "@/api/apiClient";

const normalizePrefixedFilters = ({ key, values = [] }) => {
  const prefixMap = {
    gt_: "_gt",
    gte_: "_gte",
    lt_: "_lt",
    lte_: "_lte",
    ne_: "_ne",
  };

  const prefixEntries = Object.entries(prefixMap);

  const params = {};

  values.forEach((value) => {
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

export const getAll = ({ limit, page, perPage, type, capacity } = {}) => {
  const capacityFilters = normalizePrefixedFilters({
    key: "specifications.capacity",
    values: capacity,
  });

  const params = {
    _limit: limit,
    _page: page,
    _per_page: perPage,
    type,
    ...capacityFilters,
  };

  return api.get("/cars", { params });
};
