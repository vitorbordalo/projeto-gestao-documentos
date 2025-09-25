import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar.jsx';
import Topbar from './components/Layout/Topbar.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-slateink flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}