import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import formatCurrency from "../utils/formatCurrency";
import { useState } from "react";

const Cart = () => {
  const { cart, removeFromCart, getTotal } = useCart();
  const { token } = useUser();
  const [message, setMessage] = useState("");

  const handleCheckout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (res.ok) {
        setMessage("¡Compra realizada con éxito!");
      } else {
        setMessage("Error al realizar la compra.");
      }
    } catch (err) {
      setMessage("Ocurrió un error.");
    }
  };

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cart.map((pizza, i) => (
              <li key={i}>
                {pizza.name} - {formatCurrency(pizza.price)} x {pizza.quantity}
                <button onClick={() => removeFromCart(pizza.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h3>Total: {formatCurrency(getTotal())}</h3>
          <button disabled={!token} onClick={handleCheckout}>
            Pagar
          </button>
          {message && <p>{message}</p>}
        </>
      )}
    </div>
  );
};

export default Cart;

