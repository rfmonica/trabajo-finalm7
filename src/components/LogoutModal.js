import React from 'react';
import './LogoutModal.css';

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Estás seguro de que quieres cerrar la sesión?</h2>
        <button className="confirm-btn" onClick={onConfirm}>
          Presiona para salir
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
