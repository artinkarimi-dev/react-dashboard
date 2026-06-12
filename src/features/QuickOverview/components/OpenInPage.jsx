import { Link } from "react-router-dom";

function OpenInPage({ navigateTo, itemsLength, title, description }) {
  return (
    <div className="flex flex-col gap-4 mb-6 md:mb-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full shrink-0" />

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 truncate">
            {title}
          </h2>

          <span className="text-[10px] sm:text-xs font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full border border-gray-200 shrink-0">
            {itemsLength}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 max-w-xl leading-relaxed">
          {description}
        </p>
      </div>

      <div className="w-full sm:w-auto sm:self-end">
        <Link to={navigateTo} className="block">
          <button
            className="
            cursor-pointer
              w-full sm:w-auto
              flex items-center justify-center gap-2
              px-4 sm:px-5 py-2.5
              bg-white border border-gray-200
              rounded-xl
              text-xs sm:text-sm font-semibold text-gray-700
              hover:border-blue-400 hover:text-blue-600 hover:shadow-md
              transition-all duration-300
              whitespace-nowrap
            "
          >
            <span>View All</span>

            <span className="text-[10px] sm:text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">
              {itemsLength}
            </span>

            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OpenInPage;
