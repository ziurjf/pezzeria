import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const login = async (credentials) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (res.ok) {
        setToken(data.token);
        setEmail(data.email);
        setSuccess("¡Inicio de sesión exitoso!");
        setError("");
      } else {
        throw new Error(data.message || "Error al iniciar sesión");
      }
    } catch (err) {
      setError(err.message);
      setSuccess("");
    }
  };

  const register = async (credentials) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (res.ok) {
        setToken(data.token);
        setEmail(data.email);
        setSuccess("¡Registro exitoso!");
        setError("");
      } else {
        throw new Error(data.message || "Error al registrarse");
      }
    } catch (err) {
      setError(err.message);
      setSuccess("");
    }
  };

  const logout = () => {
    setToken("");
    setEmail("");
    setError("");
    setSuccess("");
  };

  const fetchProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        setEmail(data.email);
      } else {
        throw new Error(data.message || "No se pudo obtener el perfil");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        login,
        register,
        logout,
        fetchProfile,
        error,
        success,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
