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

const ITEMS_PER_PAGE = 7;

function ProductTableView({ products, setProducts, paginatedProducts }) {
  const [mobilePage, setMobilePage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const mobileStart = (mobilePage - 1) * ITEMS_PER_PAGE;
  const mobileVisibleProducts = products.slice(
    mobileStart,
    mobileStart + ITEMS_PER_PAGE,
  );

  return (
    <div className="w-full">
      <div className="hidden md:block">
        <Table
          header={{ title: "Product List" }}
          pagination={{
            itemsPerPage: ITEMS_PER_PAGE,
            items: products,
            setItems: setProducts,
          }}
        >
          <TableHead>
            {ProductsAllTableHeaderRow.map((cell) => (
              <TableHeadCell key={cell}>{cell}</TableHeadCell>
            ))}
          </TableHead>
          <TableBody>
            {paginatedProducts.map((product) => (
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
      </div>

      <div className="md:hidden">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-between px-3 pt-4 pb-2">
            <h2 className="text-base font-bold text-gray-800">Product List</h2>
            <span className="text-xs text-gray-400">
              {products.length} items
            </span>
          </div>

          <div className="space-y-3 px-3 pb-4">
            {mobileVisibleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-3 items-start"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 flex-shrink-0 flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain p-1"
                    src={product.img}
                    alt={product.title}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-gray-900 leading-snug truncate">
                      {product.title}
                    </p>
                    <span
                      className={clsx(
                        "flex-shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold",
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
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-sm font-bold text-gray-900">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(product.price)}
                    </span>
                    <span className="text-xs text-gray-400">
                      Stock:{" "}
                      <span
                        className={clsx(
                          "font-semibold",
                          product.stock > 50
                            ? "text-gray-600"
                            : product.stock > 10
                              ? "text-amber-500"
                              : "text-red-500",
                        )}
                      >
                        {product.stock}
                      </span>
                    </span>
                    <span className="text-xs font-mono text-gray-300">
                      #{product.id}
                    </span>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <button className="flex-1 text-xs py-1.5 rounded-lg bg-gray-100 hover:bg-blue-100 hover:text-blue-700 text-gray-600 font-medium transition-colors cursor-pointer">
                      Edit
                    </button>
                    <button className="flex-1 text-xs py-1.5 rounded-lg bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-600 font-medium transition-colors cursor-pointer">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200">
            <button
              onClick={() => setMobilePage((p) => Math.max(1, p - 1))}
              disabled={mobilePage === 1}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <p className="text-sm text-gray-700">
              Page <span className="font-medium">{mobilePage}</span> of{" "}
              <span className="font-medium">{totalPages}</span>
            </p>

            <button
              onClick={() => setMobilePage((p) => Math.min(totalPages, p + 1))}
              disabled={mobilePage === totalPages}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTableView;
