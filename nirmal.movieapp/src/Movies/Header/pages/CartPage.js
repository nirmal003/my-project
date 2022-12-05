import React, { useContext } from "react";
import ShowTwo from "../../Main/ShowTwo";
import { Cart } from "../Context";

function CartPage() {
  const { cart, setCart } = useContext(Cart);

  return (
    <div>
      <h3>CartPage</h3>

      {cart.map((cart) => (
        <>
          <h2 key={cart.id}>{cart.title}</h2>
          <ShowTwo key={cart.id} cart={cart} {...cart} />
        </>
      ))}
    </div>
  );
}

export default CartPage;
