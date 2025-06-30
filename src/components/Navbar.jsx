import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/format";

const Navbar = () => {
  const { total } = useCart();

  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/register">Registro</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/profile">Perfil</Link></li>
        <li>
          <Link to="/cart">🛒 Total: {formatCurrency(total)}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
