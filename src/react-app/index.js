import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles/global.css';
import './styles/planes.css';
import './styles/prices.css';
import './styles/header-main.css';
import './styles/comparative2.css';
import './styles/login.css';
import './utils/login';
import './utils/libs/owl.carousel.min';

createRoot(document.getElementById('root')).render(<App />);