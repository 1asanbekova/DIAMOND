import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useProducts } from "../../Contexts/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = ({ currentData }) => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

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
