// src/HomePage.tsx

import React, { Fragment } from 'react';
import LogoutButton from '../components/Logout';
import Profile from '../components/Profile';

const HomePage: React.FC = () => {
  return (
    <div className='container'>
        <span className='centered'>
            <h1>Welcome to SoundScore</h1>
            <Profile/>
            <LogoutButton/>
        </span>
      
    </div>
  );
};

export default HomePage;