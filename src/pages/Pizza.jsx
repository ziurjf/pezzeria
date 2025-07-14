import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatCurrency } from "../utils/format";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error("Error al obtener la pizza:", error));
  }, [id]);

  if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div>
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} style={{ width: "300px" }} />
      <p>{pizza.desc}</p>
      <p>{formatCurrency(pizza.price)}</p>
    </div>
  );
};

export default Pizza;
