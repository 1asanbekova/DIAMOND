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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../Contexts/ProductContextProvider";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    type: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      let obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };
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

  return (
    <Box
      align="center"
      sx={{
        backgroundImage:
          "url(https://img2.akspic.ru/crops/9/3/4/0/7/170439/170439-svet-purpur-drevesnyj_ugol-ogon-plamya-3840x2160.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        height: "70vh",
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
        ADD PRODUCT
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
          label="Name"
          variant="outlined"
          name="name"
          size="small"
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
          label="Picture"
          variant="outlined"
          name="picture"
          size="small"
        />
        <TextField
          onChange={handleInp}
          sx={{
            borderColor: "black",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
          fullWidth
          label="Type"
          variant="outlined"
          name="type"
          size="small"
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => {
              addProduct(product);
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
            ADD PRODUCT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddProduct;
