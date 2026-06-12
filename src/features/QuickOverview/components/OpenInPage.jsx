import { Link } from "react-router-dom";

function OpenInPage({ navigateTo, itemsLength, title, description }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full" />

          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {title}

            <span className="ml-2 text-sm align-middle font-mono font-normal bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full border border-gray-200">
              {itemsLength}
            </span>
          </h2>
        </div>

        <p className="text-sm text-gray-500">{description}</p>
      </div>

      <Link to={navigateTo}>
        <button className="cursor-pointer group flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-blue-400 hover:text-blue-600 hover:shadow-lg transition-all duration-300">
          <span>View All</span>

          <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded-full group-hover:bg-blue-100">
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
  );
}

export default OpenInPage;
