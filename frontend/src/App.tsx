import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import './styles/styles.css';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  // Wait for authentication status to be determined
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='outside-container'>
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
    <div className='footer bg-gt-lilac'>
      <ul>
        <li className='footer-li'>Contact us</li>
        <li className='footer-li'>Feedback</li>
      </ul>
    </div>
    </div>
  );
}

function AuthenticatedApp() {
  return (
    <Auth0Provider
      domain="dev-srzyj8ntgygxhh28.us.auth0.com"
      clientId="EDyTj3ZTfrZUURFiN7o829ZGsWmQYYBl"
      authorizationParams={{
        redirect_uri: 'http://localhost:3000/home/'
      }}
    >
      <App />
    </Auth0Provider>
  );
}

export default AuthenticatedApp;