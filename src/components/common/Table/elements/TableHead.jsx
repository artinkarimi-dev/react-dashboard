import React from "react";

function TableHead({ children }) {
  const count = React.Children.count(children);
  return (
    <div
      className="grid gap-4 bg-gray-100 rounded-t-lg px-4 py-3 border-b border-gray-200"
      style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
    >
      {children}
    </div>
  );
}

export default TableHead;
