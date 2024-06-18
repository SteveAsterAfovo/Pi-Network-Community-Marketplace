import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ton composant racine principal
import './index.css'; // Fichier CSS global

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
