import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { formatCurrency } from "../utils/format";

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useCart();
  const { token } = useUser();

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cart.map((pizza) => (
          <div key={pizza.id}>
            <p>{pizza.name}</p>
            <button onClick={() => removeFromCart(pizza.id)}>-</button>
            <span> {pizza.quantity} </span>
            <button onClick={() => addToCart(pizza)}>+</button>
          </div>
        ))
      )}
      <h3>Total: {formatCurrency(total)}</h3>
      <button disabled={!token}>Pagar</button>
    </div>
  );
};

export default Cart;
