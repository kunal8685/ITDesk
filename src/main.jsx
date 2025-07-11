import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
// Removed: import { BrowserRouter as Router } from 'react-router-dom'; // No longer needed here
import { ModalProvider } from './context/ModalContext'; // Import ModalProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider> {/* ModalProvider wraps the App component */}
      <App /> {/* App component already contains BrowserRouter */}
    </ModalProvider>
  </React.StrictMode>
);
