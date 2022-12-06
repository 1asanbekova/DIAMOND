import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
// import "../Products/counterButton.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box } from "@mui/system";
import { useProducts } from "../../Contexts/ProductContextProvider";
import { useCart } from "../../Contexts/CartContextProvider";
import "./Shop.css";
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
          mt: "25%",
        }}
      >
        <Box
          className="counter_button"
          component="div"
          sx={{
            border: "2px solid",
            borderRadius: "15px",
            width: "25%",
            height: "5vh",
            margin: "auto",
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

        <Box sx={{ mt: "5%" }}>
          {checkProductInCart(productDetails.id) ? (
            <Button
              variant="contained"
              className="shop"
              onClick={() => addProductToCart(productDetails)}
              sx={{
                backgroundColor: "#ffc7ba",
                color: "rgb(47, 12, 12)",
                width: "100%",
                height: "10vh",
                borderRadius: "15px",
                fontWeight: 700,
                fontFamily: "Quattrocento Sans",
                fontSize: "20px",
              }}
            >
              Already in cart
            </Button>
          ) : (
            <Button
              variant="contained"
              className="shop"
              onClick={() => addProductToCart(productDetails)}
              sx={{
                backgroundColor: "#ffc7ba",
                color: "rgb(47, 12, 12)",
                width: "100%",
                height: "10vh",
                borderRadius: "15px",
                fontWeight: 700,
                fontFamily: "Quattrocento Sans",
                fontSize: "20px",
              }}
            >
              {" "}
              Add to cart
            </Button>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default ProductCounter;
