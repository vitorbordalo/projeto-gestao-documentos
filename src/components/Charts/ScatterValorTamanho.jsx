import React from 'react';
import {
  ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ZAxis,
} from 'recharts';

export default function ScatterValorTamanho({ data }) {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart>
          <CartesianGrid />
          <XAxis type="number" dataKey="valor" name="Valor" unit=" R$" tickFormatter={(v)=>v.toLocaleString('pt-BR')} />
          <YAxis type="number" dataKey="mb" name="Tamanho" unit=" MB" />
          <ZAxis type="number" dataKey="paginas" range={[60, 400]} />
          <Tooltip formatter={(v, n) => n === 'valor' ? `R$ ${Number(v).toLocaleString('pt-BR')}` : v} />
          <Scatter data={data} fill="#0B3D91" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}