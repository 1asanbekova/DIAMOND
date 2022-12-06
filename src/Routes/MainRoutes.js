import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";
import { useAuth } from "../Contexts/AuthContextProvider";
import AboutUsPage from "../Pages/AboutUsPage";
import AddProductPage from "../Pages/AddProductPage";
import AuthPage from "../Pages/AuthPage";
import CartPage from "../Pages/CartPage";
import ContactUsPage from "../Pages/ContactUsPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import ProductsPage from "../Pages/ProductsPage";

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    { link: "/auth", element: <AuthPage />, id: 1 },
    { link: "/", element: <HomePage />, id: 2 },
    { link: "/addproduct", element: <AddProductPage />, id: 3 },
    { link: "/products", element: <ProductsPage />, id: 4 },
    { link: "/products/:id", element: <ProductDetailsPage />, id: 7 },

    { link: "/aboutus", element: <AboutUsPage />, id: 5 },
    { link: "/contactus", element: <ContactUsPage />, id: 6 },
    { link: "/cart", element: <CartPage />, id: 8 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
