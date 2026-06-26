import { ProductsProvider } from "./store/ProductsProvider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </StrictMode>,
);
