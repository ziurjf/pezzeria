import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { formatCurrency } from "../utils/format";

const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUser();

  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/cart">🛒 Total: {formatCurrency(total)}</Link> |{" "}
      {token ? (
        <>
          <Link to="/profile">Profile</Link> |{" "}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
