import { useState } from "react";
import { CiGrid41, CiViewTable } from "react-icons/ci";
import { products } from "../../data/products";
import SectionTitle from "../../components/common/SectionTitle";
import ProductTableView from "../../features/ProductsView/ProductTableView";
import ProductGridView from "../../features/ProductsView/ProductGridView";
import AddProductFields from "../../features/ProductsTable/components/AddProductFields";
import Modal from "../../components/common/Modal";

function Products() {
  const [layoutType, setLayoutType] = useState("TABLE");
  const [paginatedProducts, setPaginatedProducts] = useState([...products]);
  const [newProduct, setNewProduct] = useState({
    id: 51,
    title: "",
    description: "",
    price: "",
    img: "/products/iphone.png",
    isPublished: false,
    stock: "",
  });

  const createNewProduct = () => {
    const newId = Math.max(...products.map((p) => p.id)) + 1;
    products.push({ ...newProduct, id: newId });
  };

  const Buttons = (
    <>
      <button
        onClick={() => setLayoutType((p) => (p === "TABLE" ? "GRID" : "TABLE"))}
        className="
      p-2.5 rounded-xl
      backdrop-blur-md
      bg-white/20
      shadow-sm
      text-gray-700
      hover:bg-white/30
      hover:shadow-md
      transition-all duration-200
      cursor-pointer
      active:scale-95
    "
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
        Trigger={
          <button
            className="font-sans
            bg-gradient-to-b from-green-400 to-green-800
            text-white px-4 py-2 rounded-md
            hover:from-green-800 hover:to-green-400
            transition duration-300 ease-in-out
            flex items-center gap-2
            w-full sm:w-auto justify-center
            cursor-pointer"
          >
            Product creation
          </button>
        }
        onSubmit={createNewProduct}
      >
        <AddProductFields newProduct={newProduct} onChange={setNewProduct} />
      </Modal>
    </>
  );

  return (
    <div>
      <SectionTitle title="Dashboard" Buttons={Buttons} />

      <section>
        {layoutType === "TABLE" ? (
          <ProductTableView
            products={products}
            paginatedProducts={paginatedProducts}
            setProducts={setPaginatedProducts}
          />
        ) : (
          <ProductGridView
            product={products}
            paginatedProducts={paginatedProducts}
            setProducts={setPaginatedProducts}
          />
        )}
      </section>
    </div>
  );
}

export default Products;
