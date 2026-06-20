import { FaSearch } from "react-icons/fa";

const Search = ({ onChange, value }) => {
  return (
    <div className="relative w-[240px] group">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FaSearch className="text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
      </div>
      <input
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value);
          }
        }}
        value={value}
        type="text"
        placeholder="جستجو..."
        className="w-full h-11 pl-10 pr-4 text-sm font-medium text-gray-700 bg-gray-50 border-2 border-gray-200 rounded-2xl outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:shadow-lg focus:shadow-blue-100 hover:border-gray-300 placeholder:text-gray-400"
      />
      <div className="absolute inset-0 rounded-2xl pointer-events-none ring-0 focus-within:ring-2 focus-within:ring-blue-300 transition-all duration-300"></div>
    </div>
  );
};

export default Search;
