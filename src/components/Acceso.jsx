import { useState } from 'react';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;

    if (!email || !password) return setMessage('Todos los campos son obligatorios.');
    if (password.length < 6) return setMessage('La contraseña debe tener al menos 6 caracteres.');
    
    setMessage('✅ Inicio de sesión exitoso');
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} />
        <button type="submit">Iniciar sesión</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginPage;
