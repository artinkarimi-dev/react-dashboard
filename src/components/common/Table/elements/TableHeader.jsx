
import Filter from "./Filter";
import Search from "./Search";
function TableHeader({ header }) {
  const { Buttons, title } = header;

  return (
    <div dir="ltr" className="flex justify-between items-center mb-4">
      <div className="font-medium text-lg">{title}</div>

      <div className="flex items-center gap-2">
        {Buttons ? (
          <Buttons />
        ) : (
          <>
            <Filter />
            <Search />
          </>
        )}
      </div>
    </div>
  );
}

export default TableHeader;
