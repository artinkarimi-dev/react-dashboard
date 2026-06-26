import { createContext, useState, useEffect } from "react";
import { products as initialProducts } from "../data/products";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [allProducts, setAllProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : initialProducts;
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(allProducts));
  }, [allProducts]);

  return (
    <ProductsContext.Provider value={{ allProducts, setAllProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
