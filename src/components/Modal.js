import React from 'react';
import './LogoutModal.css';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>Estás seguro que quieres cerrar la sesión?</p>
        <button onClick={onConfirm}>Presiona para salir!!!</button>
      </div>
    </div>
  );
};

export default Modal;
