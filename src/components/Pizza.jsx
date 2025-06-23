import { useState, useEffect } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => {
        setPizza(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al buscar pizza:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center my-5">Cargando pizza...</p>;
  if (!pizza) return <p className="text-center my-5">Pizza no encontrada.</p>;

  return (
    <div className="container py-5">
      <div className="card mx-auto" style={{ maxWidth: "540px" }}>
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h2 className="card-title">{pizza.name}</h2>
          <p className="card-text">
            <strong>Precio:</strong> ${pizza.price.toLocaleString()}
          </p>
          <p><strong>Ingredientes:</strong></p>
          <ul>
            {pizza.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
          <p className="mt-3">{pizza.description}</p>
          <button className="btn btn-success">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
