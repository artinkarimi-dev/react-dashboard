import { FiEye, FiEyeOff, FiLock, FiUnlock, FiPackage } from "react-icons/fi";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className="font-bold text-sm text-gray-900 text-center">
          {product.title}
        </p>
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 text-center">
          {product.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 mt-2 gap-1 flex-wrap">
          {product.isPublished ? (
            <FiEye className="w-4 h-4 text-gray-400" />
          ) : (
            <FiEyeOff className="w-4 h-4 text-gray-400" />
          )}

          <div className="flex items-center gap-1">
            {product.isPublished ? (
              <FiUnlock className="w-4 h-4 text-emerald-500" />
            ) : (
              <FiLock className="w-4 h-4 text-gray-400" />
            )}
            <span>{product.isPublished ? "Published" : "Draft"}</span>
          </div>

          <div className="flex items-center gap-1">
            <FiPackage className="w-4 h-4 text-gray-400" />
            <span>
              Stock: <strong>{product.stock}</strong>
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 py-3 bg-gray-50 flex items-center justify-between border-t border-gray-100">
        <span className="text-xs text-gray-400">Icons</span>
        <div className="flex items-center gap-1">
          <span className="text-[11px] text-gray-400">$</span>
          <span className="text-gray-900 font-bold text-sm">
            {product.price?.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
