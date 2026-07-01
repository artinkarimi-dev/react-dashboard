import TableHeader from "./elements/TableHeader";
import Pagination from "../Pagination";

function Table({
  header = { title: "List of items", Buttons: undefined },
  children,
  searchTerm,
  setSearchTerm,
  filters,
  setFilters,
  showFilter = true,
  pagination: { items, setItems, itemsPerPage } = {
    items: null,
    setItems: null,
    itemsPerPage: null,
  },
}) {
  return (
    <>
      <div className="bg-white border border-slate-300 shadow-sm rounded-xl p-4 mt-10 overflow-hidden transition-shadow hover:shadow-md">
        <TableHeader
          showFilter={showFilter}
          header={header}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filters={filters}
          setFilters={setFilters}
        />
        <div>{children}</div>
        {items && (
          <Pagination
            items={items}
            setItems={setItems}
            itemsPerPage={itemsPerPage}
          />
        )}
      </div>
    </>
  );
}

export default Table;
