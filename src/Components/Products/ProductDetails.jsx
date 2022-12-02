import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, CardContent, Grid } from "@mui/material";
import { useProducts } from "../../Contexts/ProductContextProvider";
import ProductCounter from "./ProductCounter";
import { useAuth } from "../../Contexts/AuthContextProvider";
import { ADD } from "../../helpers/consts";

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

  return (
    <Grid sx={{ mb: "50px", mt: "50px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            onClick={() => navigate(`/products`)}
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#0a203f",
              width: "100px",
              height: "50px",
            }}
          >
            Disabled
          </Button>
          {/* условный рендеринг для админа */}
          {email === ADD ? (
            <>
              {" "}
              <Button
                onClick={() => navigate(`/edit/${id}`)}
                variant="contained"
                sx={{
                  color: "black",
                  backgroundColor: "whitesmoke",
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
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  color: "white",
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
        <Box
          sx={{
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography gutterBottom variant="h3" component="div">
            <img
              width="400px"
              height="400px"
              src={productDetails.picture}
              alt=""
            />
          </Typography>
        </Box>

        <CardContent
          sx={{
            width: "100%",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <Typography gutterBottom variant="h3" component="div">
            {productDetails.name}
          </Typography>

          <Typography sx={{ fontSize: "25px", color: "green" }}>
            ${productDetails.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productDetails.description}
          </Typography>
        </CardContent>
      </Box>
    </Grid>
  );
};

export default ProductDetails;
