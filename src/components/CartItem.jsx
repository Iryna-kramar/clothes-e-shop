import React, { useContext } from "react";
import { Stack } from "react-bootstrap";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useContext(ShoppingCartContext);
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-item-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        alt="ItemImg"
      />
      <div className="me-auto">
        {item.name}{" "}
        {quantity > 1 && (
          <span className="text-muted" style={{ fontSize: ".65rem" }}>
            {quantity}x
          </span>
        )}
      </div>
    </Stack>
  );
};

export default CartItem;
