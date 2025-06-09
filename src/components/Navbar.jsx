import { formatCurrency } from "../utils/format";

const Navbar = ({ setView }) => {
  const total = 25000;
  const token = false;

  return (
    <nav style={{ backgroundColor: "black", color: "white", padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <span>Pizzería Mamma mía!</span>
      </div>
      <div>
        <button onClick={() => setView("home")}>🍕 Home</button>
        {token ? (
          <>
            <button onClick={() => setView("profile")}>🔓 Profile</button>
            <button onClick={() => setView("logout")}>🔒 Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => setView("login")}>🔐 Acceso</button>
            <button onClick={() => setView("register")}>📝 Registro</button>
          </>
        )}
        <button>🛒 Total: ${formatCurrency(total)}</button>
      </div>
    </nav>
  );
};

export default Navbar;
