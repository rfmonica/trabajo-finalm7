import React from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar.js';
import { useSelector } from 'react-redux';

const Ejercicio1 = () => {
  const { username, email } = useSelector(state => state);

  return (
    <>
      <Navbar username={username} email={email} />
      <LoginForm />
    </>
  );
};

export default Ejercicio1;