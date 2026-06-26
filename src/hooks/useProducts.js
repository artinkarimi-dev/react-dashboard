import { useContext } from "react";
import { ProductsContext } from "../store/ProductsProvider";

export default function useProducts() {
    return useContext(ProductsContext);
}