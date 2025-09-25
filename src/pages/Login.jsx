import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

export default function Login(){
  const nav = useNavigate();
  const submit = (e)=> { e.preventDefault(); nav('/dashboard'); };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-ivory">
      {/* ESQUERDA: IMAGEM + OVERLAY + TEXTO SOBREPOSTO */}
      <div
        className="hidden md:block relative bg-cover bg-center"
        style={{ backgroundImage: "url('/left-hero.jpg')" }}
      >
        {/* gradiente pra leitura e “acabamento old-money” */}
        <div className="absolute inset-0 bg-gradient-to-t from-royal/65 via-royal/15 to-transparent" />

        {/* texto sobre a imagem */}
        <div className="absolute bottom-8 left-8 right-8 text-ivory drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
          <h1 className="text-3xl font-semibold">Gestão Documental</h1>
          <p className="opacity-95 mt-2">Organize, busque e baixe documentos públicos</p>
        </div>
      </div>

      {/* DIREITA: LOGIN */}
      <div className="flex items-center justify-center p-8">
        <form onSubmit={submit} className="w-full max-w-sm space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo-doc.png" alt="Logo" className="w-10 h-10 object-contain" />
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