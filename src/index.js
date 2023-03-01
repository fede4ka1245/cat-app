import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(serviceWorker => {
      console.log("Service Worker registered: ", serviceWorker);
    })
    .catch(error => {
      console.error("Error registering the Service Worker: ", error);
    });
}
