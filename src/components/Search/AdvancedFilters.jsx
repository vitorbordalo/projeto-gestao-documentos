import React from 'react';
import Input from '../UI/Input';
import Select from '../UI/Select';

export default function AdvancedFilters({ filters, onChange }){
  const set = (key, val)=> onChange({ ...filters, [key]: val });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
      <div>
        <label className="label">Fornecedor</label>
        <Input value={filters.fornecedor||''} onChange={e=>set('fornecedor', e.target.value)} placeholder="Empresa X" />
      </div>
      <div>
        <label className="label">Valor (mín.)</label>
        <Input type="number" value={filters.valorMin||''} onChange={e=>set('valorMin', e.target.value)} placeholder="0" />
      </div>
      <div>
        <label className="label">Secretaria</label>
        <Select value={filters.secretaria||''} onChange={e=>set('secretaria', e.target.value)}>
          <option value="">Todas</option>
          <option>Saúde</option>
          <option>Educação</option>
          <option>Finanças</option>
          <option>Administração</option>
        </Select>
      </div>
      <div>
        <label className="label">Tipologia</label>
        <Select value={filters.tipologia||''} onChange={e=>set('tipologia', e.target.value)}>
          <option value="">Todas</option>
          <option>Nota Fiscal</option>
          <option>Contrato</option>
          <option>Recibo</option>
          <option>Relatório</option>
        </Select>
      </div>
    </div>
  );
}