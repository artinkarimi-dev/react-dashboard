import React from "react";

function TableRow({ children, className }) {
  const count = React.Children.count(children);
  return (
    <div
      className={`grid gap-4 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 items-center ${className ?? ""}`}
      style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
    >
      {children}
    </div>
  );
}

export default TableRow;
