import { useState } from "react";
import { Link } from "react-router-dom";
import { products as productsData } from "../../../data/products";
import OpenInPage from "./OpenInPage";

function LatestProducts() {
  const [products] = useState([...productsData]);
  const recentProducts = products.slice(-6);

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl border border-gray-200/50 shadow-xl overflow-hidden">
      <div className="p-4 sm:p-6 lg:p-8">
        <OpenInPage
          itemsLength={products.length}
          navigateTo="/products"
          title="Latest Products"
          description="Recently added products"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-6">
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
    <div className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-100 hover:border-blue-300 transition-all duration-500 hover:-translate-y-1">
     
      <div className="relative h-52 sm:h-60 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 overflow-hidden">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-full object-contain p-5 transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute top-4 left-4">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-lg">
            {index + 1}
          </div>
        </div>

        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all"
        >
          <svg
            className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-500"}`}
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

        <div className="absolute bottom-4 left-4">
          <span
            className={`px-3 py-1 rounded-xl text-xs font-bold shadow-lg ${product.isPublished ? "bg-emerald-500 text-white" : "bg-red-500 text-white"}`}
          >
            {product.isPublished ? "In Stock" : "Out Of Stock"}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2 flex-1">
            {product.title}
          </h3>
          <span className="text-xs text-gray-400 whitespace-nowrap">
            #{product.id}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <span
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${product.isPublished ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"}`}
          >
            <div
              className={`w-2 h-2 rounded-full ${product.isPublished ? "bg-emerald-500" : "bg-red-500"}`}
            />
            {product.isPublished ? "Active" : "Inactive"}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            Stock: {product.entity}
          </span>
        </div>

        <p
          className={`text-sm text-gray-500 leading-7 transition-all duration-300 ${isExpanded ? "" : "line-clamp-3"}`}
        >
          {product.description}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400">Price</div>
            <div className="text-2xl sm:text-3xl font-black text-gray-900">
              ${Number(product.price).toLocaleString("en-US")}
            </div>
          </div>
          <Link to="/products">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold hover:scale-105 transition-all shadow-lg shadow-blue-200">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LatestProducts;
