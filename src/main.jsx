import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import './styles/tailwind.css';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
);