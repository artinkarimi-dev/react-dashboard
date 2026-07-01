import Filter from "./Filter";
import Search from "./Search";

function TableHeader({
  header,
  searchTerm,
  setSearchTerm,
  filters,
  setFilters,
  showFilter,
}) {
  const { Buttons, title } = header;

  return (
    <div dir="ltr" className="flex justify-between items-center mb-4">
      <div className="font-medium text-lg">{title}</div>

      <div className="flex items-center gap-2">
        {Buttons ? (
          <Buttons />
        ) : (
          <>
            {showFilter && <Filter filters={filters} setFilters={setFilters} />}

            <Search value={searchTerm} onChange={setSearchTerm} />
          </>
        )}
      </div>
    </div>
  );
}

export default TableHeader;
