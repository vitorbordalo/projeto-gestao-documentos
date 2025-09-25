import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const Item = ({ to, children }) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={clsx(
        'flex items-center gap-3 px-4 py-3 rounded-xl',
        active ? 'bg-royal text-white' : 'text-slateink hover:bg-royal/10'
      )}
    >
      {children}
    </Link>
  );
};

export default function Sidebar(){
  return (
    <aside className="w-64 min-h-screen bg-ivory border-r border-[#E4E1D1] p-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-xl bg-royal"></div>
        <div className="font-semibold text-slateink">Gestão Documental</div>
      </div>
      <nav className="space-y-2">
        <Item to="/dashboard">Dashboard</Item>
        <Item to="/documentos">Documentos</Item>
        <Item to="/upload">Upload</Item>
      </nav>
    </aside>
  );
}