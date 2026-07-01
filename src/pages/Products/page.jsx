import { useState, useCallback, useMemo, useEffect } from "react";
import { CiGrid41, CiViewTable } from "react-icons/ci";
import { products } from "../../data/products";
import useProducts from "../../hooks/useProducts";
import SectionTitle from "../../components/common/SectionTitle";
import ProductTableView from "../../features/ProductsView/ProductTableView";
import ProductGridView from "../../features/ProductsView/ProductGridView";
import AddProductFields from "../../features/ProductsTable/components/AddProductFields";
import Modal from "../../components/common/Modal";
import useSearchFilter from "../../hooks/useSearchFilter";
import useFilter from "../../hooks/useFilter";
import useLocalStorage from "../../hooks/useLocalStorage";
import CreateButton from "../../components/common/CreateButton";

const defaultProduct = {
  title: "",
  description: "",
  price: "",
  img: "/products/iphone.png",
  isPublished: false,
  stock: "",
};

function Products() {
  const [layoutType, changeLayout] = useLocalStorage();
  const [newProduct, setNewProduct] = useState(() => ({ ...defaultProduct }));

  const { allProducts, setAllProducts } = useProducts();

  const {
    searchTerm,
    setSearchTerm,
    filteredData: searchResult,
  } = useSearchFilter(allProducts, ["title", "id"]);

  const {
    filters,
    setFilters,
    filteredData: finalData,
  } = useFilter(searchResult);

  const createNewProduct = useCallback(() => {
    const newId = Math.max(...allProducts.map((p) => p.id), 0) + 1;
    const created = { ...newProduct, id: newId };
    setAllProducts((prev) => [created, ...prev]);
    setNewProduct({ ...defaultProduct });
  }, [allProducts, newProduct]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(allProducts));
  }, [allProducts]);

  const Buttons = useMemo(
    () => (
      <>
        <button
          onClick={changeLayout}
          className="p-2.5 rounded-xl backdrop-blur-md bg-white/20 shadow-sm text-gray-700 hover:bg-white/30 hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95"
          aria-label="Toggle layout"
        >
          {layoutType === "TABLE" ? (
            <CiGrid41 className="text-2xl" />
          ) : (
            <CiViewTable className="text-2xl" />
          )}
        </button>

        <Modal
          title="Create a new product"
          Trigger={<CreateButton>Create Product</CreateButton>}
          onSubmit={createNewProduct}
        >
          <AddProductFields newProduct={newProduct} onChange={setNewProduct} />
        </Modal>
      </>
    ),
    [changeLayout, createNewProduct, newProduct],
  );

  return (
    <div>
      <SectionTitle title="Product Dashboard" Buttons={Buttons} />
      <section>
        {layoutType === "TABLE" ? (
          <ProductTableView
            products={finalData}
            setProducts={setAllProducts}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filters={filters}
            setFilters={setFilters}
          />
        ) : (
          <ProductGridView
            product={finalData}
            setProducts={setAllProducts}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filters={filters}
            setFilters={setFilters}
          />
        )}
      </section>
    </div>
  );
}

export default Products;
