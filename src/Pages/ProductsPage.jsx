import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import ProductList from "../Components/Products/ProductList";
import ProductFilter from "../Components/Products/ProductFilter";
import ProductSort from "../Components/Products/ProductSort";
import ProductPagination from "../Components/Products/ProductPagination";
import { useProducts } from "../Contexts/ProductContextProvider";
import { useSearchParams } from "react-router-dom";
import { createTheme, Typography } from "@mui/material";

const ProductsPage = () => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  //! для пагинации
  const [page, setPage] = useState(1);

  const itemsPerPage = 9;

  const count = Math.ceil(products.length / itemsPerPage);

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  // //! SEARCH
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  const theme = createTheme({
    breakpoints: {
      values: {
        xxxs: 320,
        xxs: 380,
        xs: 430,
        sm: 770,
        md: 1024,
        lg: 1250,
        xl: 1440,
      },
    },
  });

  return (
    <>
      <Box
        sx={{
          width: "100%",
          mt: "3%",
        }}
      >
        <Box
          sx={{
            backgroundImage:
              "url(https://www.harrywinston.com/-/media/project/harry-winston/corporate/harry-winston-int/high-jewelry/marvelous-creations-by-harry-winston/plp/herolarged_marvelous_plp_3_butterfly_2.gif?rev=cdc5e43d532542f6bf53f79b171af377)",
            [theme.breakpoints.down("xxs")]: {
              backgroundSize: "100% ",
              height: "10vh",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "45px",
              fontFamily: "Quattrocento Sans",
              textAlign: "center",
              color: "rgb(47, 12, 12)",
              [theme.breakpoints.down("sm")]: {
                fontSize: "38px",
              },
              [theme.breakpoints.down("xs")]: {
                fontSize: "30px",
              },
              [theme.breakpoints.down("xxs")]: {
                fontSize: "28px",
                mt: "10%",
              },
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
              [theme.breakpoints.down("sm")]: {
                fontSize: "18px",
              },
              [theme.breakpoints.down("xs")]: {
                fontSize: "16px",
              },
              [theme.breakpoints.down("xxs")]: {
                display: "none",
              },
            }}
          >
            New exclusive IceTrends rings made with sustainably created stones
            and 14k gold.
          </Typography>
        </Box>

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
            <ProductFilter />
            <ProductSort />
            <ProductList currentData={currentData} />
            <ProductPagination page={page} setPage={setPage} count={count} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductsPage;
