import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'antd/dist/antd.css';
createRoot(document.querySelector('#root') as Element).render(<App />);
