import React from "react";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/format";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart();

   if (!pizza) {
    return <div style={{ color: "red" }}>❌ Error: no se encontró la pizza</div>;
  }

  return (
    <div className="card-pizza"style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "1rem",
      margin: "1rem",
      textAlign: "center",
      width: "250px",
      backgroundColor: "#fff"
    }}>
      <img
        src={pizza.img}
        alt={pizza.name}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h3>{pizza.name}</h3>
      <p>{pizza.description}</p>
      <p><strong>{formatCurrency(pizza.price)}</strong></p>
      <button onClick={() => addToCart(pizza)}>Agregar al carrito</button>
    </div>
  );
};

export default CardPizza;
