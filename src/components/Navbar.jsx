import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/format";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const { total = 0, cartItems = [] } = useCart();
  const totalQuantity = cartItems?.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav style={{ backgroundColor: "black", color: "white", padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <span>Pizzería Mamma mía!</span>
      </div>
      <div>
        {token ? (
          <>
            <button onClick={() => navigate("/")}>🍕 Home</button>
            <button onClick={logout}>🔒 Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("/login")}>🔐 Acceso</button>
            <button onClick={() => navigate("/register")}>📝 Registro</button>
          </>
        )}
        <button>🛒 Total: ${formatCurrency(total ?? 0)}</button>
      </div>
      <Link to="/cart">
        🛒 Carrito ({totalQuantity}) - Total: ${formatCurrency(total)}
      </Link>
    </nav>
  );
};

export default Navbar;
