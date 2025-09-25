import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

// Imagens
const hero = new URL('../assets/left-hero.jpg', import.meta.url).href;
const logo = new URL('../assets/logo-doc.png', import.meta.url).href;

export default function Login() {
  const nav = useNavigate();
  const submit = (e) => { e.preventDefault(); nav('/dashboard'); };

  return (
    <div className="grid md:grid-cols-2 min-h-screen">
      {/* ESQUERDA: foto + overlay + texto */}
      <div className="relative hidden md:block min-h-screen">
        {/* ⬇️ ALTERAÇÃO AQUI: adicionamos object-[40%_center] */}
        <img
          src={hero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[40%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-royal/65 via-royal/15 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 text-ivory drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
          <h1 className="text-3xl font-semibold">Gestão Documental</h1>
          <p className="opacity-95 mt-2">Organize, busque e baixe documentos públicos</p>
        </div>
      </div>

      {/* DIREITA: gradiente + login */}
      <div className="relative flex items-center justify-center p-8">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(11,61,145,0.45) 0%, #ffffff 55%, #F7F5EE 100%)'
          }}
        />
        <form onSubmit={submit} className="w-full max-w-sm space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Logo Gestão Documental" className="w-10 h-10 object-contain" />
            <div className="text-xl font-semibold text-slateink">Entrar</div>
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

          <div className="text-xs text-slateink/60 text-center">
            Interface desenvolvida por Vitor Bordalo – PlaysTech
          </div>
        </form>
      </div>
    </div>
  );
}