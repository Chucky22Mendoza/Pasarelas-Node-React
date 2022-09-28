import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles/global.css';
import './styles/planes.css';
import './styles/prices.css';
import './styles/header-main.css';
import './styles/comparative.css';

createRoot(document.getElementById('root')).render(<App />);