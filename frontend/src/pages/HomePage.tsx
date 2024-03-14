// src/HomePage.tsx

import React, { Fragment } from 'react';
import LogoutButton from '../components/Logout';
import Profile from '../components/Profile';
import ActionButton from '../components/ActionButton';

const HomePage: React.FC = () => {
  return (
    <div className='container bg-gt-cream'>
      <span className='centered'>
          <h1>Welcome to SoundScore</h1>
      </span>
      <div className='container centered'>
        <ActionButton route="/game/new" label="Start a new game"></ActionButton>
        <ActionButton route="/game/join" label="Join a new game"></ActionButton>
      </div>
      
    </div>
  );
};

export default HomePage;