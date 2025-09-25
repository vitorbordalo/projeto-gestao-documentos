import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';

export default function Topbar(){
  const nav = useNavigate();
  const logout = () => nav('/');

  return (
    <header className="sticky top-0 z-10 bg-[var(--ivory)]/70 backdrop-blur border-b border-[var(--line)]">
      <div className="max-w-screen-2xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-sm text-[var(--ink)]/60">Painel</div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-[var(--ink)]/50">v1.0 (Versão Teste)</span>
          <Button
          onClick={() => nav('/')}
          className="bg-white text-[var(--royal)] border border-[var(--royal)] 
             hover:bg-[var(--royal)] hover:text-white 
             transition px-4 py-2 rounded-xl font-medium"
>
             Sair
            </Button>
        </div>
      </div>
    </header>
  );
}