import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import ProductList from "../Components/Products/ProductList";
import ProductFilter from "../Components/Products/ProductFilter";
import ProductSort from "../Components/Products/ProductSort";
import ProductPagination from "../Components/Products/ProductPagination";
import { useProducts } from "../Contexts/ProductContextProvider";
import { useSearchParams } from "react-router-dom";
import { Typography } from "@mui/material";

const ProductsPage = () => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  const count = Math.ceil(products.length / itemsPerPage);

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  //   //! SEARCH
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          mt: "3%",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "45px",
            fontFamily: "Quattrocento Sans",
            textAlign: "center",
            color: "rgb(47, 12, 12)",
          }}
        >
          Crushed Ice Fine Rings
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "20px",
            fontFamily: "Quattrocento Sans",
            textAlign: "center",
            color: "rgb(47, 12, 12)",
            mb: "5%",
          }}
        >
          New exclusive IceTrends rings made with sustainably created stones and
          14k gold.
        </Typography>
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "65%",
                lg: "65%",
                xl: "80%",
              },
            }}
          >
            <ProductSort />
            <ProductList currentData={currentData} />
            <ProductPagination page={page} setPage={setPage} count={count} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ProductsPage;
