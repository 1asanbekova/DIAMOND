import { DialogContent } from "@mui/material";
import React from "react";
import Cart from "../Components/Cart/Cart";
import Order from "../Components/Cart/Order";
import { useCart } from "../Contexts/CartContextProvider";
import { getCountProductsInCart } from "../helpers/functions";

const CartPage = () => {
  const { cart, addProductToCart } = useCart();

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(getCountProductsInCart);
  }, [addProductToCart]);
  return (
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
      <div className="order-subtotal">
        <div className="cart-right">
          <Order />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
