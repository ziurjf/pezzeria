import React from "react";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/format";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, total } = useCart();

  if (cartItems.length === 0)
    return <p>El carrito está vacío. Agregá pizzas para comprar.</p>;

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> - {formatCurrency(item.price)} x {item.quantity}
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>-</button>
          </li>
        ))}
      </ul>
      <h3>Total: {formatCurrency(total)}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
