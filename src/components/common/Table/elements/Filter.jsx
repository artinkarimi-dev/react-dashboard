import { FaFilter } from "react-icons/fa6";
import Modal from "../../Modal";
import { useState, useEffect } from "react";

const Filter = ({ filters, setFilters }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [localFilters, setLocalFilters] = useState({
    minPrice: "",
    maxPrice: "",
    status: "all",
  });

  const handleApply = () => {
    setLocalFilters(filters);
    setFilters?.(localFilters);
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="
          flex items-center gap-2 px-4 py-2
          bg-white text-gray-800
          border border-gray-200
          rounded-xl shadow-sm
          hover:shadow-md hover:border-gray-300
          hover:text-gray-900
          transition-all duration-200
          active:scale-95
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        "
      >
        <FaFilter className="text-gray-500 text-sm" />
        <span className="text-sm font-medium tracking-wide">Filter</span>
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Product Filter"
        onSubmit={handleApply}
      >
        <div className="space-y-6 text-white">
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Min Price
            </label>
            <input
              type="number"
              value={localFilters.minPrice}
              onChange={(e) =>
                setLocalFilters({
                  ...localFilters,
                  minPrice: e.target.value,
                })
              }
              placeholder="e.g. 100"
              className="
                w-full p-3
                bg-gray-800 text-white
                border border-gray-700
                rounded-lg
                focus:outline-none focus:ring-2 focus:ring-blue-500
                focus:border-transparent
                transition
              "
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Max Price
            </label>
            <input
              type="number"
              value={localFilters.maxPrice}
              onChange={(e) =>
                setLocalFilters({
                  ...localFilters,
                  maxPrice: e.target.value,
                })
              }
              placeholder="e.g. 1000"
              className="
                w-full p-3
                bg-gray-800 text-white
                border border-gray-700
                rounded-lg
                focus:outline-none focus:ring-2 focus:ring-blue-500
                focus:border-transparent
                transition
              "
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Status</label>
            <select
              value={localFilters.status}
              onChange={(e) =>
                setLocalFilters({
                  ...localFilters,
                  status: e.target.value,
                })
              }
              className="
                w-full p-3
                bg-gray-800 text-white
                border border-gray-700
                rounded-lg
                focus:outline-none focus:ring-2 focus:ring-blue-500
                focus:border-transparent
                transition
              "
            >
              <option value="all">All</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Filter;
