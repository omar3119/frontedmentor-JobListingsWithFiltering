import { createContext, useEffect, useState } from "react";
import datalist from "./data.json";

export const FilterCard = createContext();
export function FilterCardProvider({ children }) {
  const [filter, setFilter] = useState([]);
  const [filterCard, setFilterCard] = useState(datalist);

  const filtered = datalist.filter((card) =>
    filter.every((f) => {
      return (
        card.role.includes(f) ||
        card.level.includes(f) ||
        card.languages.includes(f) ||
        card.tools.includes(f)
      );
    })
  );
  useEffect(() => {
    if (filter.length === 0) {
      setFilterCard(datalist);
    } else {
      filtered;
      setFilterCard(filtered);
    }
  }, [filter]);

  return (
    <FilterCard.Provider
      value={{ filter, setFilter, filterCard, setFilterCard }}
    >
      {children}
    </FilterCard.Provider>
  );
}
