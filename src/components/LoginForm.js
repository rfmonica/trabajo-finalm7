import React, { useState } from 'react';
import LogoutModal from './LogoutModal';
import './LoginForm.css'

const LoginForm = ({ showPasswordToggle, showModal, onLoginSuccess }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const correctPassword = 'mod7ReactUSIP';

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmLogout = () => {
    setIsModalOpen(false);
    window.location.href = "/ejercicio4"; // Redirigir a Ejercicio 4
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== correctPassword) {
      setError('Password incorrecto');
      return;
    }

    // Aquí manejamos el caso donde el password es correcto (e.g., guardar datos)
    setError('');
    console.log('Usuario:', username);
    console.log('Email:', email);

    // Limpiar el formulario
    setUsername('');
    setEmail('');
    setPassword('');

    // Notificar al componente padre (Navbar) que el login fue exitoso
    if (onLoginSuccess) {
      onLoginSuccess(username, email);
    }
  };

  return (
    <div className="login-form">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Usuario</label>
          <input
            type="text"
            placeholder="Introduce tu usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Introduce tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Introduce tu password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPasswordToggle && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="toggle-btn"
            >
              {passwordVisible ? 'Hide' : 'Show'}
            </button>
          )}
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      {showModal && (
        <div className="logout-link">
          <button
            type="button"
            onClick={handleLogoutClick}
            className="logout-btn"
          >
            Logout
          </button>
        </div>
      )}
      <LogoutModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLogout}
      />
    </div>
  );
};

export default LoginForm;
