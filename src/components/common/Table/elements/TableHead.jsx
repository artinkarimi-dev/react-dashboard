function TableHead({ children }) {
  return (
    <div className="grid grid-cols-5 gap-4 bg-gray-100 rounded-t-lg px-4 py-3 border-b border-gray-200">
      {children}
    </div>
  );
}

export default TableHead;