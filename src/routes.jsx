import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Layout principal do app (Sidebar + Topbar + Outlet)
import App from './App.jsx';

// Páginas
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Documents from './pages/Documents.jsx';
import Upload from './pages/Upload.jsx';

const router = createBrowserRouter([
  // Tela inicial: Login
  { path: '/', element: <Login /> },

  // Área logada (usa o App como layout)
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'documentos', element: <Documents /> }, // PT-BR
      { path: 'upload', element: <Upload /> },
    ],
  },
]);

export default router;