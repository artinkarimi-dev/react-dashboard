import { products, ProductsTableHeaderRow } from "../../data/products";
import { Link } from "react-router-dom";
import { IoIosLink } from "react-icons/io";
import { CiGrid41, CiViewTable } from "react-icons/ci";
import getStatusIndicatorClass from "../../utils/product-status";
import useProducts from "../../hooks/useProducts";
import RemoveProductIcon from "./components/RemoveProductIcon";
import ChangeVisibilityIcon from "./components/ChangeVisibilityIcon";
import EditProductIcon from "./components/EditProductIcon";
import clsx from "clsx";
import { useState } from "react";
import Pagination from "../../components/common/Pagination";

const ITEMS_PER_PAGE = 4;

function ProductsTable() {
  const { allProducts, setAllProducts } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [layoutType, setLayoutType] = useState("TABLE");

  const totalItems = allProducts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  const visibleProducts = allProducts.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  const Buttons = () => (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLayoutType((p) => (p === "TABLE" ? "GRID" : "TABLE"))}
        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
        aria-label="Toggle layout"
      >
        {layoutType === "TABLE" ? (
          <CiGrid41 className="text-xl text-gray-700" />
        ) : (
          <CiViewTable className="text-xl text-gray-700" />
        )}
      </button>

      <Link
        className="text-blue-600 font-semibold flex justify-center items-center gap-1 hover:text-blue-800 transition"
        to={"/products"}
      >
        Products Page <IoIosLink />
      </Link>
    </div>
  );

  const removeProduct = (id) => {
    setAllProducts((prev) => prev.filter((product) => product.id !== id));
    if (visibleProducts.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeProductVisibility = (id) => {
    setAllProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, isPublished: !product.isPublished }
          : product,
      ),
    );
  };

  if (totalItems === 0) {
    return (
      <div className="w-full p-8 text-center">
        <p className="text-gray-500">No products available</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h2 className="text-lg font-bold text-gray-900">Product List</h2>
        <Buttons />
      </div>

      {layoutType === "GRID" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-gray-50">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm truncate">
                  {product.title}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span
                    className={clsx(
                      "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold",
                      product.isPublished
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-rose-50 text-rose-600",
                    )}
                  >
                    <span
                      className={getStatusIndicatorClass(product.isPublished)}
                    />
                    {product.isPublished ? "Public" : "Private"}
                  </span>
                  <span className="font-bold text-gray-900">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(product.price)}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <RemoveProductIcon
                      product={product}
                      handler={removeProduct}
                    />
                    <ChangeVisibilityIcon
                      product={product}
                      handler={changeProductVisibility}
                    />
                    <EditProductIcon product={product} />
                  </div>
                  <span className="text-xs text-gray-400">
                    ID: {product.id}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="hidden sm:block">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {ProductsTableHeaderRow.map((row, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {row}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {visibleProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3 group relative">
                        <img
                          src={product.img}
                          alt={product.title}
                          className="w-8 h-8 rounded-lg object-cover"
                        />
                        <span className="font-medium text-gray-800 line-clamp-1 cursor-help">
                          {product.title}
                        </span>
                        <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full mt-1 z-10 bg-gray-900 text-white text-xs rounded-lg py-1.5 px-3 whitespace-nowrap shadow-lg pointer-events-none">
                          {product.title}
                          <div className="absolute -top-1 left-4 w-2 h-2 bg-gray-900 rotate-45" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={clsx(
                          "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold",
                          product.isPublished
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-rose-50 text-rose-600",
                        )}
                      >
                        <span
                          className={getStatusIndicatorClass(
                            product.isPublished,
                          )}
                        />
                        {product.isPublished ? "Public" : "Private"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="font-semibold text-gray-900">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }).format(product.price)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <RemoveProductIcon
                          product={product}
                          handler={removeProduct}
                        />
                        <ChangeVisibilityIcon
                          product={product}
                          handler={changeProductVisibility}
                        />
                        <EditProductIcon product={product} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {layoutType === "TABLE" && (
        <div className="sm:hidden">
          <div className="flex flex-col gap-3 px-1 py-2">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-12 h-12 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm truncate">
                      {product.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      #{product.id}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className={clsx(
                      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold",
                      product.isPublished
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-rose-50 text-rose-600",
                    )}
                  >
                    <span
                      className={getStatusIndicatorClass(product.isPublished)}
                    />
                    {product.isPublished ? "Public" : "Private"}
                  </span>

                  <span className="font-bold text-gray-900 text-sm">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(product.price)}
                  </span>
                </div>

                <div className="flex items-center gap-4 pt-2 border-t border-slate-100">
                  <RemoveProductIcon
                    product={product}
                    handler={removeProduct}
                  />
                  <ChangeVisibilityIcon
                    product={product}
                    handler={changeProductVisibility}
                  />
                  <EditProductIcon product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Pagination
        totalItems={totalItems}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ProductsTable;
