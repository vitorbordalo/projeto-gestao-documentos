import React, { useState } from 'react';
import Input from '../components/UI/Input';
import Select from '../components/UI/Select';
import Button from '../components/UI/Button';
import { municipios } from '../utils/mock';

export default function Upload(){
  const [form, setForm] = useState({ municipio:'', secretaria:'', tipologia:'', nome:'', data:'', arquivo:null });

  const set = (k,v)=> setForm(s=>({ ...s, [k]: v }));

  const submit = (e)=>{
    e.preventDefault();
    alert('Simulação de cadastro realizada (frontend apenas).');
  };

  return (
    <form onSubmit={submit} className="card p-6 space-y-4 max-w-3xl">
      <div className="text-lg font-semibold">Cadastro de Documento por Município</div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="label">Município</label>
          <Select value={form.municipio} onChange={e=>set('municipio', e.target.value)}>
            <option value="">Selecione</option>
            {municipios.map(m=><option key={m}>{m}</option>)}
          </Select>
        </div>
        <div>
          <label className="label">Secretaria</label>
          <Select value={form.secretaria} onChange={e=>set('secretaria', e.target.value)}>
            <option value="">Selecione</option>
            <option>Saúde</option>
            <option>Educação</option>
            <option>Finanças</option>
            <option>Administração</option>
          </Select>
        </div>
        <div>
          <label className="label">Tipologia</label>
          <Select value={form.tipologia} onChange={e=>set('tipologia', e.target.value)}>
            <option value="">Selecione</option>
            <option>Nota Fiscal</option>
            <option>Contrato</option>
            <option>Recibo</option>
            <option>Relatório</option>
          </Select>
        </div>
        <div>
          <label className="label">Nome do Documento</label>
          <Input value={form.nome} onChange={e=>set('nome', e.target.value)} placeholder="Ex: NF 0001" />
        </div>
        <div>
          <label className="label">Data</label>
          <Input type="date" value={form.data} onChange={e=>set('data', e.target.value)} />
        </div>
        <div>
          <label className="label">Arquivo (simulado)</label>
          <Input type="file" onChange={e=>set('arquivo', e.target.files?.[0]||null)} />
        </div>
      </div>

      <div className="flex gap-3">
        <Button type="submit">Cadastrar</Button>
        <button type="button" className="btn-ghost">Limpar</button>
      </div>
    </form>
  );
}