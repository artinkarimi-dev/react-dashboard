import { products, ProductsTableHeaderRow } from "../../data/products";
import { Link } from "react-router-dom";
import { IoIosLink } from "react-icons/io";
import getStatusIndicatorClass from "../../utils/product-status";
import Table from "../../components/common/Table/Table";
import TableHead from "../../components/common/Table/elements/TableHead";
import TableRow from "../../components/common/Table/elements/TableRow";
import TableCell from "../../components/common/Table/elements/TableCell";
import TableBody from "../../components/common/Table/elements/TableBody";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell";
import RemoveProductIcon from "./components/RemoveProductIcon";
import ChangeVisibilityIcon from "./components/ChangeVisibilityIcon";
import EditProductIcon from "./components/EditProductIcon";
import clsx from "clsx";
import { useState, useEffect, useRef } from "react";

function ProductsTable() {
  const [allProducts, setAllProducts] = useState([...products]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const currentPageRef = useRef({ start: 0, end: 4 });

  useEffect(() => {
    const { start, end } = currentPageRef.current;
    setVisibleProducts(allProducts.slice(start, end));
  }, [allProducts]);

  const handlePageChange = (paginated) => {
    if (paginated.length > 0) {
      const firstItem = paginated[0];
      const startIndex = allProducts.findIndex((p) => p.id === firstItem.id);
      currentPageRef.current = {
        start: startIndex,
        end: startIndex + paginated.length,
      };
    }
    setVisibleProducts(paginated);
  };

  const Buttons = () => (
    <Link
      className="text-blue-600 font-semibold flex justify-center items-center gap-1 hover:text-blue-800 transition"
      to={"/products"}
    >
      Products Page <IoIosLink />
    </Link>
  );

  const removeProduct = (id) => {
    setAllProducts((prev) => prev.filter((product) => product.id !== id));
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

  return (
    <Table
      pagination={{
        items: allProducts,
        setItems: handlePageChange,
        itemsPerPage: 4,
      }}
      header={{ title: "Product List", Buttons: Buttons }}
    >
      <div className="flex flex-col gap-3 sm:hidden px-1 py-2">
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
                <p className="text-xs text-gray-400 mt-0.5">#{product.id}</p>
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
              <RemoveProductIcon product={product} handler={removeProduct} />
              <ChangeVisibilityIcon
                product={product}
                handler={changeProductVisibility}
              />
              <EditProductIcon product={product} />
            </div>
          </div>
        ))}
      </div>

      <div className="hidden sm:block overflow-x-auto">
        <TableHead>
          {ProductsTableHeaderRow.map((row) => (
            <TableHeadCell key={row}>{row}</TableHeadCell>
          ))}
        </TableHead>

        <TableBody>
          {visibleProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell>
                <span className="font-semibold text-gray-900">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(product.price)}
                </span>
              </TableCell>
              <TableCell>
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </div>
    </Table>
  );
}

export default ProductsTable;
