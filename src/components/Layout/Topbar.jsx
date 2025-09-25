import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';

export default function Topbar(){
  const nav = useNavigate();

  const logout = () => {
    // aqui no futuro você pode limpar tokens, etc
    nav('/');
  };

  return (
    <header className="sticky top-0 z-10 bg-ivory/80 backdrop-blur border-b border-[#E4E1D1]">
      <div className="max-w-screen-2xl mx-auto px-6 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-slateink">Painel</h1>

        <div className="flex items-center gap-3">
          <div className="text-sm text-slateink/70">v0.1 • Old-Money UI</div>
          <Button onClick={logout} className="btn-ghost">Sair</Button>
        </div>
      </div>
    </header>
  );
}