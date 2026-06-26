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
        <div className="w-full overflow-x-auto">
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
                  className="hover:bg-blue-50/40 transition-colors duration-150"
                >
                  <TableCell>#{product.id}</TableCell>

                  <TableCell>{product.title}</TableCell>

                  <TableCell>
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </TableCell>

                  <TableCell>
                    <span
                      className={clsx(
                        "inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold",
                        product.isPublished
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-rose-50 text-rose-500",
                      )}
                    >
                      <span
                        className={getStatusIndicatorClass(product.isPublished)}
                      />
                      {product.isPublished ? "Public" : "Private"}
                    </span>
                  </TableCell>

                  <TableCell>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(product.price)}
                  </TableCell>

                  <TableCell>
                    <span
                      className={clsx(
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

                  <TableCell>Actions</TableCell>
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

      <div className="md:hidden space-y-4">
        {currentItems.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <img
                src={product.img}
                className="w-14 h-14 rounded-lg object-contain bg-gray-100"
              />
              <div>
                <p className="font-semibold">{product.title}</p>
                <p className="text-xs text-gray-400">#{product.id}</p>
              </div>
            </div>

            <div className="flex justify-between mt-3">
              <span
                className={clsx(
                  product.isPublished ? "text-emerald-600" : "text-rose-500",
                )}
              >
                {product.isPublished ? "Public" : "Private"}
              </span>

              <span className="font-bold">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(product.price)}
              </span>
            </div>

            <div className="mt-2 text-sm text-gray-500">
              Stock: {product.stock}
            </div>

            <div className="mt-3 text-blue-600 font-medium">Actions</div>
          </div>
        ))}

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
