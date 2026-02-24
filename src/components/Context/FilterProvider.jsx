import { createContext, useContext, useState } from "react";

const FilterContext = createContext(null);

export function FilterProvider({ children }) {
  const [isFilterDirty, setIsFilterDirty] = useState(false);

  return (
    <FilterContext.Provider value={{ isFilterDirty, setIsFilterDirty }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const ctx = useContext(FilterContext);
  if (!ctx) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return ctx;
}
