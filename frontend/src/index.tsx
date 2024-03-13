import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthenticatedApp from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AuthenticatedApp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();