import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
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
          xs: "45%",
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
          // backgroundSize: "100% 100%",
          backgroundSize: "350px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "300px",
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
              xs: "10px",
              sm: "12px",
              md: "14px",
              lg: "16px",
              xl: "20px",
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
            xs: "10px",
            sm: "12px",
            md: "14px",
            lg: "16px",
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
            xs: "10px",
            sm: "12px",
            md: "14px",
            lg: "16px",
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
