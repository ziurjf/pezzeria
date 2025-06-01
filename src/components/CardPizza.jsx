import { formatCurrency } from "../utils/format";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem", borderRadius: "8px", maxWidth: "300px" }}>
      <img src={img} alt={name} style={{ width: "100%" }} />
      <h2>{name}</h2>
      <p>Ingredientes: {ingredients.join(", ")}</p>
      <p>Precio: ${formatCurrency(price)}</p>
      <button>Ver más</button>
      <button>Añadir</button>
    </div>
  );
};

export default CardPizza;
