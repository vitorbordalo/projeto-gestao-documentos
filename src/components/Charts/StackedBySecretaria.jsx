import React from 'react';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid,
} from 'recharts';

export default function StackedBySecretaria({ data }) {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} stackOffset="expand">
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="mes" tickLine={false} axisLine={false} />
          <YAxis tickFormatter={(v)=>`${Math.round(v*100)}%`} tickLine={false} axisLine={false} />
          <Tooltip formatter={(val)=>[val, 'Docs']} />
          <Legend />
          <Bar dataKey="Saúde" stackId="s" fill="#0B3D91" radius={[6,6,0,0]} />
          <Bar dataKey="Educação" stackId="s" fill="#081C3A" />
          <Bar dataKey="Finanças" stackId="s" fill="#C6A961" />
          <Bar dataKey="Administração" stackId="s" fill="#8BA6D9" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}