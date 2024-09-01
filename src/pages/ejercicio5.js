
import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar.js';


const Ejercicio5 = () => {
  const [userInfo, setUserInfo] = useState({ username: '', email: '' });

  const handleLoginSuccess = (username, email) => {
    setUserInfo({ username, email });
  };

  return (
    <>
      <Navbar username={userInfo.username} email={userInfo.email} />
      <LoginForm showPasswordToggle={true} showModal={true} onLoginSuccess={handleLoginSuccess} />
    </>
  );
};

export default Ejercicio5;


