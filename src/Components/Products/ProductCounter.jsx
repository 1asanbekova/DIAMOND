import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
// import "../Products/counterButton.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box } from "@mui/system";
import { useProducts } from "../../Contexts/ProductContextProvider";
import { useCart } from "../../Contexts/CartContextProvider";

const ProductCounter = () => {
  const { productDetails, getProductDetails } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

  const [count, setCount] = useState(1);
  const increment = () => {
    setCount((prev) => (prev += 1));
  };

  const decrement = () => {
    count >= 1 ? setCount((prev) => (prev -= 1)) : setCount(0);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          pt: "10px",
          margin: "15px",
          padding: "20px",
        }}
      >
        {/* {productDetails.name} {productDetails.price} */}
        <Box
          className="counter_button"
          component="div"
          sx={{
            border: "1px solid",
            borderRadius: "15px",
            width: "70px",
            height: "28px",
            marginTop: "1px",
            marginBottom: "15px",
          }}
        >
          <div>
            <RemoveIcon
              className="remove_icon"
              onClick={() => decrement()}
              sx={{ marginRight: "6px" }}
            />
          </div>
          <div>
            <div>{count}</div>
          </div>
          <div>
            <AddIcon
              className="add_icon"
              onClick={increment}
              sx={{ marginLeft: "6px" }}
            />
          </div>
        </Box>

        {checkProductInCart(productDetails.id) ? (
          <Button
            variant="contained"
            onClick={() => addProductToCart(productDetails)}
            sx={{
              backgroundColor: "#ffc7ba",
              color: "white",
              width: "400px",
              height: "55px",
              // mb: "50px",
              borderRadius: "15px",
              font: "16px",
              fontWeight: "600",
            }}
          >
            Already in cart
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => addProductToCart(productDetails)}
            sx={{
              backgroundColor: "#ffc7ba",
              color: "white",
              width: "400px",
              height: "55px",
              // mb: "50px",
              borderRadius: "15px",
              font: "16px",
              fontWeight: "600",
            }}
          >
            {" "}
            Add to cart
          </Button>
        )}
      </Box>
    </div>
  );
};

export default ProductCounter;
