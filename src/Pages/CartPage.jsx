import { Button, DialogContent } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import Order from "../Components/Cart/Order";
import { useCart } from "../Contexts/CartContextProvider";
import { getCountProductsInCart } from "../helpers/functions";

const CartPage = () => {
  const { cart, addProductToCart } = useCart();
  const navigate = useNavigate();

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(getCountProductsInCart);
  }, [addProductToCart]);
  return (
    <>
      <div className="cartPage">
        <div className="headerBox">
          <h1 className="headerCart">Your cart({count})</h1>
        </div>
        <div className="cartBody">
          <div className="cart-left">
            {" "}
            <Cart />
          </div>
        </div>
      </div>
      <Box sx={{ display: "flex", justifyContent: "center", mb: "2%" }}>
        <Button
          onClick={() => {
            navigate("/shop");
          }}
          sx={{
            width: "25%",
            backgroundColor: "#ffc7ba",
            fontWeight: 700,
            fontSize: "25px",
            fontFamily: "Quattrocento Sans",
            textAlign: "center",
            color: "rgb(47, 12, 12)",
          }}
        >
          BUY NOW
        </Button>
      </Box>
    </>
  );
};

export default CartPage;
