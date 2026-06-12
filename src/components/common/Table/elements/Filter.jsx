import { FaFilter } from "react-icons/fa6";

const Filter = () => {
  return (
    <button
      dir="ltr"
      className="group relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:border-gray-300 hover:text-gray-900 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 cursor-pointer overflow-hidden"
    >
      <FaFilter className="text-gray-500 group-hover:text-blue-500 transition-colors duration-200 text-[13px]" />
      <span className="tracking-wide">Filter</span>

      <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  );
};

export default Filter;
