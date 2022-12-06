import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";
import { useAuth } from "../Contexts/AuthContextProvider";
import { ADD } from "../helpers/consts";
import AboutUsPage from "../Pages/AboutUsPage";
import AddProductPage from "../Pages/AddProductPage";
import AuthPage from "../Pages/AuthPage";
import ContactUsPage from "../Pages/ContactUsPage";
import EditProductPage from "../Pages/EditProductPage";
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
  ];

  const PRIVATE_ROUTES = [
    { link: "/edit/:id", element: <EditProductPage />, id: 8 },
    { link: "/admin", element: <AddProductPage />, id: 3 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                key={item.id}
                path={item.link}
                element={
                  user.email === ADD ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
