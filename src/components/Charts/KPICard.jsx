import React from 'react';

export default function KPICard({ label, value }) {
  return (
    <div className="card p-4">
      <div className="text-slateink/70 text-sm">{label}</div>
      <div className="text-2xl font-semibold">{value.toLocaleString('pt-BR')}</div>
    </div>
  );
}