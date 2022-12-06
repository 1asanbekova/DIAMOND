import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import PaymentIcon from "@mui/icons-material/Payment";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import "./ProductCard.css";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, CardContent, createTheme, Grid } from "@mui/material";
import { useProducts } from "../../Contexts/ProductContextProvider";
import ProductCounter from "./ProductCounter";
import { useAuth } from "../../Contexts/AuthContextProvider";
import { ADD } from "../../helpers/consts";
import { Image } from "@mui/icons-material";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { getProductDetails, productDetails, deleteProduct } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, []);

  //! ====================
  const {
    user: { email },
  } = useAuth();

  //! ====================

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
    <Grid
      sx={{
        mb: "50px",
        mt: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          [theme.breakpoints.down("xs")]: {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            width: { sm: "50%", xs: "100%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            sx={
              {
                // [theme.breakpoints.down("sm")]: {
                //   width: "50%",
                // },
                // [theme.breakpoints.down("xs")]: {
                //   width: "60%",
                // },
                // [theme.breakpoints.down("xxs")]: {
                //   width: "70%",
                // },
                // [theme.breakpoints.down("xxxs")]: {
                //   width: "90%",
                // },
              }
            }
          >
            <img width="95%" src={productDetails.picture} alt="" />
          </Typography>
        </Box>
        <Box>
          <CardContent
            sx={{
              width: "93%",
              fontWeight: "bold",
              textAlign: "center",
              [theme.breakpoints.down("xs")]: {
                width: "90%",
              },
            }}
          >
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{
                fontWeight: 700,
                fontSize: "50px",
                fontFamily: "Quattrocento Sans",
                textAlign: "center",
                color: "rgb(47, 12, 12)",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "35px",
                },
                [theme.breakpoints.down("xs")]: {
                  fontSize: "25px",
                },
              }}
            >
              {productDetails.name}
            </Typography>

            <Typography sx={{ fontSize: "25px", color: "green" }}>
              ${productDetails.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {productDetails.description}
            </Typography>
          </CardContent>

          <ProductCounter />

          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              mt: "30%",
            }}
          >
            {/* условный рендеринг для админа */}
            {email === ADD ? (
              <>
                {" "}
                <Button
                  onClick={() => navigate(`/edit/${id}`)}
                  variant="outlined"
                  sx={{
                    color: "black",
                    backgroundColor: "#ffc7ba",
                    width: "100px",
                    height: "50px",
                  }}
                >
                  EDIT
                </Button>
                <Button
                  onClick={() => {
                    deleteProduct(id);
                    navigate(`/products`);
                  }}
                  variant="outlined"
                  sx={{
                    backgroundColor: "#ffc7ba",
                    color: "black",
                    width: "100px",
                    height: "50px",
                  }}
                >
                  DELETE
                </Button>
              </>
            ) : (
              <></>
            )}
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProductDetails;
