import React, { useEffect, useState } from "react";
import { Box, Typography, Divider, createTheme } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { JSON_API_PRODUCTS } from "../../helpers/consts";
import axios from "axios";

const ProductPagination = ({ page, setPage, count }) => {
  const [productCount, setProductCount] = useState([]);

  async function productQuantity() {
    const { data } = await axios.get(JSON_API_PRODUCTS);
    setProductCount(data);
  }

  useEffect(() => {
    productQuantity();
  }, []);

  const handleChange = (e, p) => {
    setPage(p);
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xxxs: 320,
        xxs: 380,
        xs: 425,
        sm: 770,
        md: 1024,
        lg: 1250,
        xl: 1440,
      },
    },
  });
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "100%",
          display: {
            xs: "block",
            sm: "block",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          paddingBottom: "3%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontFamily: "Quattrocento Sans",
              fontSize: "25px",
            }}
          >
            {productCount.length} pieces of jewelry
          </Typography>
          <Divider
            sx={{ marginLeft: "12px" }}
            orientation="vertical"
            flexItem
          ></Divider>
          <Stack spacing={2} sx={{ marginRight: 5 }}>
            <Pagination
              page={page}
              className="pagination"
              onChange={handleChange}
              count={count}
              color="error"
              size="small"
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPagination;
