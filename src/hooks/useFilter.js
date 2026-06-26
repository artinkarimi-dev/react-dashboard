import { useState, useMemo } from "react";

const useFilter = (data) => {
    const [filters, setFilters] = useState({
        minPrice: "",
        maxPrice: "",
        status: "all",
    });

    const filteredData = useMemo(() => {
        if (!Array.isArray(data)) return [];

        const minPrice = parseFloat(filters.minPrice);
        const maxPrice = parseFloat(filters.maxPrice);

        return data.filter((item) => {
            if (!isNaN(minPrice) && Number(item.price) < minPrice) return false;
            if (!isNaN(maxPrice) && Number(item.price) > maxPrice) return false;

            if (filters.status === "published" && !item.isPublished) return false;
            if (filters.status === "draft" && item.isPublished) return false;

            return true;
        });
    }, [data, filters]);

    return { filters, setFilters, filteredData };
};

export default useFilter;