import React, { useMemo } from 'react';
import DownloadButton from './DownloadButton';

export default function DocumentTable({ data }){
  const items = useMemo(()=> data || [], [data]);
  return (
    <div className="card p-4 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-slateink/70">
            <th className="py-2 pr-4">Nome</th>
            <th className="py-2 pr-4">Município</th>
            <th className="py-2 pr-4">Secretaria</th>
            <th className="py-2 pr-4">Tipologia</th>
            <th className="py-2 pr-4">Valor</th>
            <th className="py-2 pr-4">Data</th>
            <th className="py-2 pr-4">Ações</th>
          </tr>
        </thead>
        <tbody>
          {items.map((doc)=>(
            <tr key={doc.id} className="border-t border-[#EDEBDD]">
              <td className="py-2 pr-4">{doc.nome}</td>
              <td className="py-2 pr-4">{doc.municipio}</td>
              <td className="py-2 pr-4">{doc.secretaria}</td>
              <td className="py-2 pr-4">{doc.tipologia}</td>
              <td className="py-2 pr-4">R$ {Number(doc.valor).toLocaleString('pt-BR')}</td>
              <td className="py-2 pr-4">{doc.data}</td>
              <td className="py-2 pr-4"><DownloadButton doc={doc} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}