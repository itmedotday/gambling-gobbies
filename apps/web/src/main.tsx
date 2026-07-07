import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@itme.day/rng-react-components/style.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
