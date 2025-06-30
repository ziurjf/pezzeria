const Profile = () => {
  const email = "usuario@example.com";

  const handleLogout = () => {
    alert("Sesión cerrada");
    // Aquí iría el logout real con context
  };

  return (
    <div>
      <h2>Perfil de usuario</h2>
      <p>Email: {email}</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;
