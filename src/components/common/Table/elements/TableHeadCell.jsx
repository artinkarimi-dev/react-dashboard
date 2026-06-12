function TableHeadCell({ children }) {
  return (
    <div className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
      {children}
    </div>
  );
}

export default TableHeadCell;