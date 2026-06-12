import { FaSearch, FaSlidersH } from "react-icons/fa";

function SearchInput() {
  return (
    <div className="w-full max-w-[340px] sm:max-w-[360px] md:max-w-[420px]">
      <div className="group relative flex items-center h-11 sm:h-12 md:h-12 rounded-lg border border-gray-200 bg-white shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)] focus-within:border-green-400 focus-within:ring-4 focus-within:ring-green-100">
        <div className="flex items-center gap-2 pl-3 sm:pl-4">
          <FaSearch className="text-gray-400 text-sm transition group-focus-within:text-green-500" />

          <button
            type="button"
            className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 text-gray-500 transition-all duration-200 hover:bg-green-50 hover:text-green-500 hover:scale-105 active:scale-95"
          >
            <FaSlidersH className="text-xs" />
          </button>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="w-full h-full bg-transparent px-3 sm:px-4 text-sm text-gray-700 placeholder:text-gray-400 outline-none"
        />
      </div>
    </div>
  );
}

export default SearchInput;
