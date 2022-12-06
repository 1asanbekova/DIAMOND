import { Box, createTheme } from "@mui/material";
import React, { useEffect } from "react";
import { useProducts } from "../../Contexts/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = ({ currentData }) => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1024,
        lg: 1250,
        xl: 1440,
      },
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginLeft: {
          xs: "30px",
          sm: "30px",
          md: "0",
          lg: "0",
          xl: "0",
        },
      }}
    >
      {products ? (
        currentData().map((item) => <ProductCard key={item.id} item={item} />)
      ) : (
        <></>
      )}
    </Box>
  );
};

export default ProductList;
