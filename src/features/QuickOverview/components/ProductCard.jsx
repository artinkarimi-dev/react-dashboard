import { useState } from "react";

function ProductCard({ img, title, isPublished, price, id, description }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className="
      group
      bg-white
      rounded-3xl
      border
      border-gray-200
      overflow-hidden
      shadow-sm
      hover:shadow-2xl
      hover:shadow-blue-100
      hover:border-blue-300
      transition-all
      duration-500
      hover:-translate-y-1
      h-full
    "
    >
      <div
        className="
        relative
        h-52
        sm:h-56
        md:h-60
        bg-gradient-to-br
        from-gray-50
        to-gray-100
        overflow-hidden
      "
      >
        <img
          src={img}
          alt={title}
          className="
            w-full
            h-full
            object-contain
            p-5
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div className="absolute top-4 left-4">
          <span
            className={`
              px-3 py-1
              rounded-xl
              text-xs
              font-bold
              shadow-lg
              ${
                isPublished
                  ? "bg-emerald-500 text-white"
                  : "bg-red-500 text-white"
              }
            `}
          >
            {isPublished ? "In Stock" : "Out of Stock"}
          </span>
        </div>

       
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="
            absolute
            top-4
            right-4
            w-10
            h-10
            bg-white
            rounded-full
            shadow-lg
            flex
            items-center
            justify-center
            hover:scale-110
            transition-all
          "
        >
          <svg
            className={`w-5 h-5 ${
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
      </div>

      <div className="p-5 flex flex-col h-[220px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-amber-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <span className="text-xs font-medium text-gray-400">#{id}</span>
        </div>

        <h3
          className="
          mt-3
          text-lg
          font-bold
          text-gray-800
          group-hover:text-blue-600
          transition-colors
          line-clamp-2
          min-h-[56px]
        "
        >
          {title}
        </h3>

        <p
          className="
          mt-2
          text-sm
          text-gray-500
          line-clamp-3
          flex-1
        "
        >
          {description?.substring(0, 90)}...
        </p>

        <div
          className="
          mt-4
          pt-4
          border-t
          border-gray-100
          flex
          items-center
          justify-between
        "
        >
          <div>
            <span className="text-xs text-gray-400">Price</span>

            <div className="text-2xl font-black text-gray-900">
              ${Number(price).toLocaleString("en-US")}
            </div>
          </div>

          <button
            className="
            w-11
            h-11
            rounded-2xl
            bg-blue-500
            text-white
            flex
            items-center
            justify-center
            hover:bg-blue-600
            hover:scale-110
            transition-all
            shadow-lg
            shadow-blue-200
          "
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M18 13l1.5 6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
