// src/pages/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

// Imagens
const hero = new URL('../assets/left-hero.jpg', import.meta.url).href;
const logo = new URL('../assets/logo-doc.png', import.meta.url).href;

export default function Login() {
  const nav = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    nav('/dashboard');
  };

  return (
    <div
      className="grid md:grid-cols-2 min-h-screen"
      style={{
        background: 'linear-gradient(to bottom, rgba(11,61,145,0.35), rgba(255,255,255,0.95))'
      }}
    >
      {/* ESQUERDA (imagem de fundo) */}
      <div className="relative hidden md:block min-h-screen">
        <img
          src={hero}
          alt="Gestão Documental"
          className="absolute inset-0 w-full h-full object-cover object-[40%_center]"
        />

        <div className="absolute bottom-8 left-8 right-8 text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
          <h1 className="text-3xl font-semibold">Gestão Documental</h1>
          <p className="opacity-95 mt-2">Organize, busque e baixe documentos públicos</p>
        </div>
      </div>

      {/* DIREITA (login com fundo branco levemente translúcido) */}
      <div className="flex items-center justify-center p-8">
        <form
          onSubmit={submit}
          className="w-full max-w-sm space-y-4 card p-6 bg-white/90 shadow-lg rounded-xl"
        >
          <div className="flex items-center gap-3 mb-2">
            <img src={logo} alt="Logo Gestão Documental" className="w-10 h-10 rounded-xl object-contain" />
            <div className="text-xl font-semibold">Entrar</div>
          </div>

          <div>
            <label className="label">E-mail</label>
            <Input type="email" placeholder="voce@prefeitura.gov.br" required />
          </div>
          <div>
            <label className="label">Senha</label>
            <Input type="password" placeholder="••••••••" required />
          </div>

          <Button type="submit" className="w-full">Acessar</Button>

          <div className="text-xs text-[rgba(17,24,39,.6)] text-center">
            Interface desenvolvida por Vitor Bordalo – PlaysTech
          </div>
        </form>
      </div>
    </div>
  );
}