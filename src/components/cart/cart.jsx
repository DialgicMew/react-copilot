import React from "react";

const Cart = ({ title }) => {
  return <h1>{title}</h1>;
};

Cart.defaultProps = {
  title: "cart",
};

export default Cart;
