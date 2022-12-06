import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Contexts/AuthContextProvider";
import ProductContextProvider from "./Contexts/ProductContextProvider";
import CartContextProvider from "./Contexts/CartContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <CartContextProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
