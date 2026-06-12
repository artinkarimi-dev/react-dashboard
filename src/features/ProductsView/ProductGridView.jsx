function ProductGridView({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow p-4">
        <div className="h-32 bg-gray-200 rounded mb-2"></div>
        <h3 className="font-bold">محصول نمونه</h3>
        <p className="text-green-600">۱,۰۰۰,۰۰۰ تومان</p>
      </div>
    </div>
  );
}

export default ProductGridView;
