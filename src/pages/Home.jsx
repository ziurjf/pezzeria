import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/format";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart();

  return (
    <div className="card-pizza">
      <h3>{pizza.name}</h3>
      <img src={pizza.img} alt={pizza.name} width={200} />
      <p>{formatCurrency(pizza.price)}</p>
      <button onClick={() => addToCart(pizza)}>Añadir</button>
    </div>
  );
};

export default CardPizza;
