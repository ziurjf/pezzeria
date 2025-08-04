import { useEffect } from "react";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const { email, fetchProfile, logout } = useUser();

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="container">
      <h2>Perfil del usuario</h2>
      <p><strong>Email:</strong> {email}</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;
