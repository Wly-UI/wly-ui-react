import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './theme/css/global.css';
createRoot(document.querySelector('#root') as Element).render(<App />);
