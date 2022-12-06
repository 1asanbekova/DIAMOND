import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../Contexts/ProductContextProvider";
const EditProduct = () => {
  const { productDetails, getProductDetails, saveEditedProduct } =
    useProducts();

  const [product, setProduct] = useState(productDetails);
  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const navigate = useNavigate();

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 425,
        sm: 750,
        md: 960,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const handleInp = (e) => {
    let obj = { ...product, [e.target.name]: e.target.value };
    setProduct(obj);
  };

  return (
    <Box
      align="center"
      sx={{
        backgroundImage:
          "url(https://img2.akspic.ru/crops/0/1/5/0/7/170510/170510-singulyarnost_6-paliya-legendy_runterry-singulyarnost_6_korporaciya-mir-3840x2160.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          backgroundImage: "none",
        },
        [theme.breakpoints.down("md")]: {
          height: "54vh",
        },
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "30px",
          [theme.breakpoints.down("sm")]: {
            color: "black",
            fontSize: "24px",
          },
        }}
      >
        EDIT PRODUCT
      </Typography>
      <Box
        sx={{
          width: "30vw",
          margin: "6vh auto 10vh",
          display: "grid",
          // gridTemplateColumns: "1fr 1fr ",
          gridGap: "10px",
          [theme.breakpoints.down("sm")]: {
            width: "80%",
          },
        }}
      >
        <TextField
          onChange={handleInp}
          sx={{
            borderColor: "white",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
          fullWidth
          variant="outlined"
          name="name"
          size="small"
          value={product.name || ""}
        />

        <FormControl
          fullWidth
          sx={{ backgroundColor: "white", borderRadius: "4px" }}
        >
          <InputLabel
            sx={{
              fontSize: "18px",
              color: "black",
            }}
            htmlFor="outlined-adornment-amount"
          ></InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            onChange={handleInp}
            placeholder="Price"
            variant="outlined"
            name="price"
            size="small"
            type="number"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            value={product.price || ""}
          />
        </FormControl>

        <TextField
          onChange={handleInp}
          sx={{
            borderColor: "black",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
          fullWidth
          //   label="Picture"
          variant="outlined"
          name="picture"
          size="small"
          value={product.picture || ""}
        />
        <TextField
          onChange={handleInp}
          sx={{
            borderColor: "black",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
          fullWidth
          variant="outlined"
          name="type"
          size="small"
          value={product.type || ""}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => {
              saveEditedProduct(product);
              navigate("/products");
            }}
            sx={{
              borderColor: "black",
              backgroundColor: "#ffc7ba",
              color: "white",
              fontWeight: 700,
              fontSize: "22px",
              fontFamily: "Quattrocento Sans",
              width: "70%",
              mt: "3%",
            }}
            variant="outlined"
            fullWidth
            size="large"
          >
            SAVE EDIT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProduct;
