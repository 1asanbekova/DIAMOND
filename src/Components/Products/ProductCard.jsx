import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, createTheme } from "@mui/material";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

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
    <Box
      className="box"
      sx={{
        borderRadius: "6px",
        display: "flex",
        margin: "2%",
        flexDirection: "column",
        flexWrap: "wrap",
        width: {
          xs: "50%",
          sm: "45%",
          md: "31%",
          lg: "25%",
          xl: "28%",
        },
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${item.picture})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "300px",
          [theme.breakpoints.down("xs")]: {
            height: "200px",
          },
          [theme.breakpoints.down("xxs")]: {
            height: "150px",
          },
        }}
      ></Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "4%" }}>
        <Button
          sx={{
            marginBottom: "0%",
            backgroundColor: "#ffc7ba",
            width: "100%",
            color: "black",
            marginBottom: "5%",
            fontFamily: "Quattrocento Sans",
            fontWeight: "800",
            fontSize: {
              md: "18px",
              lg: "18px",
              xl: "20px",
            },
            [theme.breakpoints.down("sm")]: {
              height: "8vh",
            },
            [theme.breakpoints.down("xs")]: {
              height: "6vh",
            },
          }}
          onClick={() => navigate(`/products/${item.id}`)}
        >
          VIEW
        </Button>
      </Box>
      <Typography
        sx={{
          fontWeight: "600",
          marginTop: "13px",
          width: "90%",
          textAlign: "left",
          fontFamily: "Quattrocento Sans",
          fontSize: {
            xs: "15px",
            sm: "17px",
            md: "18px",
            lg: "18px",
            xl: "20px",
          },
        }}
      >
        {item.name}
      </Typography>
      <Typography
        sx={{
          fontWeight: "600",
          marginBottom: "10%",
          fontSize: {
            xs: "15px",
            sm: "17px",
            md: "18px",
            lg: "18px",
            xl: "20px",
          },
        }}
      >
        ${item.price}
      </Typography>
    </Box>
  );
};

export default ProductCard;
