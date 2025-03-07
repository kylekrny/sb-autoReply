import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import NotFound from './pages/NotFound.tsx';
import ThemeProvider from './contexts/ThemeContext.tsx';
import Landing from './features/marketing/pages/Landing.tsx';

const root = document.getElementById('root')!;

createRoot(root).render(
  <StrictMode>
    <ThemeProvider>
      <div className='w-full h-full dark:bg-black dark:text-white'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  </StrictMode>
);
