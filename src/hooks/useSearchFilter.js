import { useState } from "react";

const useSearchFilter = (data, searchFields = []) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = (data || []).filter((item) => {
    const lowerCaseSearch = searchTerm.toLowerCase().trim();
    if (!lowerCaseSearch) return true;

    return searchFields.some((field) => {
      const value = item[field];
      return value?.toString().toLowerCase().includes(lowerCaseSearch);
    });
  });

  return { searchTerm, setSearchTerm, filteredData };
};

export default useSearchFilter;