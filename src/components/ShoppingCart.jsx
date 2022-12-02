import React, { useContext } from "react";
import { Offcanvas, OffcanvasTitle, Stack } from "react-bootstrap";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";

const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems } = useContext(ShoppingCartContext);

  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        {" "}
        <OffcanvasTitle>Cart</OffcanvasTitle>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>{cartItems.map(item => (
          <CartItem key={item.id} {...item}/>
        ))}</Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
