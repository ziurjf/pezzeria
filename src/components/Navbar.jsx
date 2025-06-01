import { formatCurrency } from "../utils/format";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav style={{ backgroundColor: "black", color: "white", padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <span>Pizzería Mamma mía!</span>
      </div>
      <div>
        <button>🍕 Home</button>
        {token ? (
          <>
            <button>🔓 Profile</button>
            <button>🔒 Logout</button>
          </>
        ) : (
          <>
            <button>🔐 Accseso</button>
            <button>🔐 Registro</button>
          </>
        )}
        <button>🛒 Total: ${formatCurrency(total)}</button>
      </div>
    </nav>
  );
};

export default Navbar;
