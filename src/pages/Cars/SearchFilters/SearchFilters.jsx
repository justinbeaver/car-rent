import { useSearchParams } from "react-router-dom";

const filters = {
  type: [
    { label: "Sport", name: "type", value: "Sport", count: 10 },
    { label: "SUV", name: "type", value: "SUV", count: 12 },
    { label: "MPV", name: "type", value: "MPV", count: 16 },
    { label: "Sedan", name: "type", value: "Sedan", count: 20 },
    { label: "Coupe", name: "type", value: "Coupe", count: 14 },
    { label: "Hatchback", name: "type", value: "Hatchback", count: 14 },
  ],
  capacity: [
    { label: "2 Person", name: "capacity", value: "2", count: 10 },
    { label: "4 Person", name: "capacity", value: "4", count: 14 },
    { label: "6 Person", name: "capacity", value: "6", count: 12 },
    { label: "8 or More", name: "capacity", value: "gte_8", count: 16 },
  ],
};

export const SearchFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const toggleUrlParam = (name, value) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (newSearchParams.has(name, value)) {
      newSearchParams.delete(name, value);
    } else {
      newSearchParams.append(name, value);
    }

    setSearchParams(newSearchParams);
  };

  return (
    <aside>
      SearchFilters
      <p>Type</p>
      <ul>
        {filters.type.map(({ label, name, value, count }) => (
          <li key={value}>
            <input
              id={`${name}-${value}`}
              type="checkbox"
              name={name}
              value={value}
              checked={searchParams.has(name, value)}
              onChange={(e) => toggleUrlParam(e.target.name, e.target.value)}
            />
            <label htmlFor={`${name}-${value}`}>{`${label} (${count})`}</label>
          </li>
        ))}
      </ul>
      <p>Capacity</p>
      <ul>
        {filters.capacity.map(({ label, name, value, count }) => (
          <li key={value}>
            <input
              id={`${name}-${label}`}
              type="checkbox"
              name={name}
              value={value}
              checked={searchParams.has(name, value)}
              onChange={(e) => toggleUrlParam(e.target.name, e.target.value)}
            />
            <label htmlFor={`${name}-${label}`}>{`${label} (${count})`}</label>
          </li>
        ))}
      </ul>
    </aside>
  );
};
