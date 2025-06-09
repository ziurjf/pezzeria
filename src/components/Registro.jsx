import { useState } from 'react';

const RegisterPage = () => {
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = form;

    if (!email || !password || !confirmPassword) return setMessage('Todos los campos son obligatorios.');
    if (password.length < 6) return setMessage('La contraseña debe tener al menos 6 caracteres.');
    if (password !== confirmPassword) return setMessage('Las contraseñas no coinciden.');

    setMessage('✅ Registro exitoso');
  };

  return (
    <div className="form-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirmar Contraseña" onChange={handleChange} />
        <button type="submit">Registrarse</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterPage;
