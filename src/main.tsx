import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Landing from './features/marketing/pages/Landing.tsx';

const root = document.getElementById('root')!;

createRoot(root).render(
  <StrictMode>
    <Landing />
  </StrictMode>
);
