import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import Upload from './pages/Upload';

export const routes = createBrowserRouter([
  { path: '/', element: <Login /> },
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/documentos', element: <Documents /> },
      { path: '/upload', element: <Upload /> },
    ],
  },
]);