import React from 'react';
import Input from '../UI/Input';

export default function QuickSearch({ name, onName, date, onDate }){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div>
        <label className="label">Nome do documento</label>
        <Input placeholder="Ex: Nota Fiscal 2025" value={name} onChange={e=>onName(e.target.value)} />
      </div>
      <div>
        <label className="label">Data</label>
        <Input type="date" value={date} onChange={e=>onDate(e.target.value)} />
      </div>
    </div>
  );
}