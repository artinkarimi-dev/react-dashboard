import { useState } from "react";
import Pagination from "../../components/common/Pagination";
import ProductCard from "./ProductCard";

const ITEMS_PER_PAGE = 8;

function ProductGridView({ product, setProducts }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = product.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  const currentItems = product.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 p-6">
        {currentItems.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <Pagination
        totalItems={totalItems}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default ProductGridView;
