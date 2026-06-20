import clsx from "clsx";
import { useState } from "react";
import getStatusIndicatorClass from "../../utils/product-status";
import TableBody from "../../components/common/Table/elements/TableBody";
import TableCell from "../../components/common/Table/elements/TableCell";
import TableHead from "../../components/common/Table/elements/TableHead";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell";
import TableRow from "../../components/common/Table/elements/TableRow";
import Table from "../../components/common/Table/Table";
import { ProductsAllTableHeaderRow } from "../../data/products";
import Pagination from "../../components/common/Pagination";

const ITEMS_PER_PAGE = 7;

function ProductTableView({
  products,
  setProducts,
  searchTerm,
  setSearchTerm,
  filters,
  setFilters,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  const currentItems = products.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  return (
    <div dir="ltr" className="w-full">
      <div className="hidden md:block">
        <Table
          header={{ title: "Product List" }}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filters={filters}
          setFilters={setFilters}
        >
          <TableHead>
            {ProductsAllTableHeaderRow.map((cell, index) => (
              <TableHeadCell key={index}>{cell}</TableHeadCell>
            ))}
          </TableHead>
          <TableBody>
            {currentItems.map((product) => (
              <TableRow
                key={product.id}
                className="group hover:bg-blue-50/40 transition-colors duration-150"
              >
                <TableCell>
                  <span className="text-xs font-mono text-gray-400">
                    #{product.id}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="font-medium text-gray-800 text-sm leading-snug">
                    {product.title}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-sm border border-gray-200">
                    <img
                      className="w-full h-full object-contain p-1"
                      src={product.img}
                      alt={product.title}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={clsx(
                      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide",
                      product.isPublished
                        ? "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200"
                        : "bg-rose-50 text-rose-500 ring-1 ring-rose-200",
                    )}
                  >
                    <span
                      className={getStatusIndicatorClass(product.isPublished)}
                    />
                    {product.isPublished ? "Public" : "Private"}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="font-bold text-gray-900 text-sm">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(product.price)}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={clsx(
                      "text-sm font-semibold",
                      product.stock > 50
                        ? "text-gray-700"
                        : product.stock > 10
                          ? "text-amber-600"
                          : "text-red-500",
                    )}
                  >
                    {product.stock}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-blue-900 font-medium">
                    Actions
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
          totalItems={totalItems}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default ProductTableView;
