function TableRow({ children }) {
  return (
    <div className="grid grid-cols-5 gap-4 px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
      {children}
    </div>
  );
}

export default TableRow;