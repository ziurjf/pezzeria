import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/format";

const Cart = () => {
  const {
    cart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    getTotal,
  } = useCart();

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {formatCurrency(item.price)} x {item.quantity}
              <button onClick={() => decrementQuantity(item.id)}>-</button>
              <button onClick={() => incrementQuantity(item.id)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: {formatCurrency(getTotal())}</h3>
    </div>
  );
};

export default Cart;
