import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RequestController from './common/helpers/RequestController';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const requestController = new RequestController();