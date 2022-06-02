import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
createRoot(document.querySelector('#root') as Element).render(<App />);
