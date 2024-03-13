// src/HomePage.tsx

import React from 'react';
import LoginButton from '../components/Login';

const LoginPage: React.FC = () => {
  return (
    <div className='container'>
      <h1>SoundScore</h1>
      <LoginButton/>
      {/* Add any other content or components for your home page */}
    </div>
  );
};

export default LoginPage;