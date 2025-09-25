import React from 'react';

export default function Dashboard(){
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      <div className="card p-4">
        <div className="text-slateink/70 text-sm">Municípios</div>
        <div className="text-2xl font-semibold">12</div>
      </div>
      <div className="card p-4">
        <div className="text-slateink/70 text-sm">Documentos</div>
        <div className="text-2xl font-semibold">4.219</div>
      </div>
      <div className="card p-4">
        <div className="text-slateink/70 text-sm">Pendências (mês)</div>
        <div className="text-2xl font-semibold">37</div>
      </div>
    </div>
  );
}