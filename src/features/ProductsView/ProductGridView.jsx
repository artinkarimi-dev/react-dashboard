import Pagination from "../../components/common/Pagination";
import ProductCard from "./ProductCard";

function ProductGridView({ product, setProducts, paginatedProducts }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 p-6">
        {paginatedProducts.map((product) => (
          <ProductCard key={product} product={product} />
        ))}
      </div>
      <Pagination items={product} itemsPerPage={8} setItems={setProducts} />
    </>
  );
}

export default ProductGridView;
