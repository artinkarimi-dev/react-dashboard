import { useState } from "react";
import { Link } from "react-router-dom";
import { products as productsData } from "../../../data/products";
import OpenInPage from "./OpenInPage";

function LatestProducts() {
  const [products] = useState([...productsData]);
  const recentProducts = products.slice(-6);

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl sm:rounded-3xl border border-gray-200/50 shadow-lg sm:shadow-xl overflow-hidden">
      <div className="p-4 sm:p-5 md:p-6 lg:p-8">
        <OpenInPage
          itemsLength={products.length}
          navigateTo="/products"
          title="Latest Products"
          description="Recently added products"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {recentProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, index }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className="
        group
        bg-white
        rounded-2xl sm:rounded-3xl
        border border-gray-200
        overflow-hidden
        shadow-sm
        hover:border-blue-300
        hover:shadow-xl hover:shadow-blue-100
        transition-all duration-300
        flex flex-col
        h-full
      "
    >
      <div
        className="
          relative
          h-44 sm:h-52 lg:h-60
          bg-gradient-to-br
          from-gray-50
          via-gray-100
          to-gray-50
          overflow-hidden
        "
      >
        <img
          src={product.img}
          alt={product.title}
          className="
            w-full h-full
            object-contain
            p-4 sm:p-5
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <div
            className="
              w-8 h-8 sm:w-9 sm:h-9
              bg-gradient-to-br
              from-blue-500
              to-blue-600
              rounded-lg sm:rounded-xl
              flex items-center justify-center
              text-white
              text-xs
              font-bold
              shadow
            "
          >
            {index + 1}
          </div>
        </div>

        <button
          onClick={() => setIsLiked((prev) => !prev)}
          className="
            absolute
            top-3 right-3
            sm:top-4 sm:right-4
            w-8 h-8 sm:w-10 sm:h-10
            bg-white
            rounded-full
            shadow
            flex items-center justify-center
            hover:scale-110
            transition
          "
        >
          <svg
            className={`w-4 h-4 sm:w-5 sm:h-5 ${
              isLiked ? "fill-red-500 text-red-500" : "text-gray-500"
            }`}
            fill={isLiked ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
          <span
            className={`
              px-2.5 sm:px-3 py-1
              rounded-lg sm:rounded-xl
              text-[10px] sm:text-xs
              font-bold
              shadow
              ${
                product.isPublished
                  ? "bg-emerald-500 text-white"
                  : "bg-red-500 text-white"
              }
            `}
          >
            {product.isPublished ? "In Stock" : "Out Of Stock"}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-4 sm:p-5 gap-4">
        <div className="flex items-start justify-between gap-2">
          <h3
            className="
              flex-1
              text-base sm:text-lg lg:text-xl
              font-bold
              text-gray-800
              line-clamp-2
              group-hover:text-blue-600
              transition-colors
            "
          >
            {product.title}
          </h3>

          <span
            className="
              shrink-0
              text-[10px] sm:text-xs
              text-gray-400
            "
          >
            #{product.id}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <span
            className={`
              inline-flex items-center gap-1
              px-2.5 py-1
              rounded-full
              text-[10px] sm:text-xs
              font-semibold
              ${
                product.isPublished
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }
            `}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                product.isPublished ? "bg-emerald-500" : "bg-red-500"
              }`}
            />
            {product.isPublished ? "Active" : "Inactive"}
          </span>

          <span
            className="
              px-2.5 py-1
              rounded-full
              text-[10px] sm:text-xs
              font-semibold
              bg-amber-50
              text-amber-700
              border border-amber-200
            "
          >
            Stock: {product.entity}
          </span>
        </div>

        <p
          className={`
            text-xs sm:text-sm
            text-gray-500
            leading-6
            ${isExpanded ? "" : "line-clamp-3"}
          `}
        >
          {product.description}
        </p>

        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="
            w-fit
            text-xs sm:text-sm
            font-semibold
            text-blue-600
            hover:text-blue-700
          "
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>

        <div
          className="
            mt-auto
            pt-4
            border-t border-gray-100
            flex items-center justify-between
            gap-3
          "
        >
          <div className="min-w-0">
            <div className="text-[10px] sm:text-xs text-gray-400">Price</div>

            <div
              className="
                text-lg sm:text-2xl lg:text-3xl
                font-black
                text-gray-900
                truncate
              "
            >
              ${Number(product.price).toLocaleString("en-US")}
            </div>
          </div>

          <Link to="/products" className="shrink-0">
            <button
              className="
                px-3 sm:px-4
                py-2
                rounded-xl
                bg-gradient-to-r
                from-blue-500
                to-indigo-500
                text-white
                text-xs sm:text-sm
                font-semibold
                hover:scale-105
                transition-all
                shadow-md
              "
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}
export default LatestProducts;
