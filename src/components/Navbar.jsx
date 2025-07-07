import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/format";

const Navbar = () => {
  const { getTotal } = useCart();

  return (
    <nav>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/register">Registrarse</Link> |{" "}
      <Link to="/login">Iniciar Sesión</Link> |{" "}
      <Link to="/profile">Perfil</Link> |{" "}
      <Link to="/cart">🛒 Total: {formatCurrency(getTotal())}</Link>
    </nav>
  );
};

export default Navbar;
