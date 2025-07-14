import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>404 - Página no encontrada</h2>
      <p>La ruta que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;
