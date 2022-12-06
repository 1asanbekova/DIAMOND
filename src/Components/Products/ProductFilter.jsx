import { createTheme, Typography } from "@mui/material";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Box } from "@mui/system";

const ProductFilter = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xxxs: 320,
        xxs: 380,
        xs: 428,
        sm: 770,
        md: 1024,
        lg: 1250,
        xl: 1440,
      },
    },
  });
  return (
    <Box sx={{ display: "flex", justifyContent: "start" }}>
      <Typography
        sx={{
          margin: "0",
          marginBottom: "2%",
          fontWeight: 600,
          fontSize: "30px",
          fontFamily: "Quattrocento Sans",
          color: "rgb(47, 12, 12)",
          marginLeft: "2%",
          mt: "1%",
          [theme.breakpoints.down("sm")]: {
            fontSize: "25px",
            marginLeft: "4%",
          },
          [theme.breakpoints.down("xs")]: {
            fontSize: "20px",
          },
        }}
      >
        FILTERS
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ArrowRightIcon />
      </Box>
    </Box>
  );
};

export default ProductFilter;
