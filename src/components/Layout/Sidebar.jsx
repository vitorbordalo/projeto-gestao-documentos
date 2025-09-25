import React from 'react';
import { NavLink } from 'react-router-dom';

const logo = new URL('../../assets/logo-doc.png', import.meta.url).href;

export default function Sidebar(){
  return (
    <aside className="w-64 bg-[var(--ivory)] border-r border-[var(--line)] min-h-screen p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-xl object-contain" />
        <span className="font-semibold text-[var(--ink)]">Gestão Documental</span>
      </div>

      <nav className="flex flex-col gap-2">
        {[
          { to: '/dashboard', label: 'Dashboard' },
          { to: '/documentos', label: 'Documentos' },
          { to: '/upload', label: 'Upload' },
        ].map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl font-medium transition
               ${isActive
                 ? 'bg-[var(--royal)] text-white'
                 : 'text-[var(--ink)] hover:bg-black/5'}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}