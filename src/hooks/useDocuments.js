import { useMemo, useState } from 'react';
import { documentos } from '../utils/mock';

export default function useDocuments(){
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [filters, setFilters] = useState({ fornecedor:'', valorMin:'', secretaria:'', tipologia:'' });

  const data = useMemo(()=>{
    return documentos.filter(d => {
      const byName = name ? d.nome.toLowerCase().includes(name.toLowerCase()) : true;
      const byDate = date ? d.data === date : true;
      const bySecretaria = filters.secretaria ? d.secretaria === filters.secretaria : true;
      const byTipologia = filters.tipologia ? d.tipologia === filters.tipologia : true;
      const byValorMin = filters.valorMin ? Number(d.valor) >= Number(filters.valorMin) : true;
      // fornecedor é meta-dado fake aqui; filtro não aplicado nos mocks
      return byName && byDate && bySecretaria && byTipologia && byValorMin;
    });
  }, [name, date, filters]);

  return { name, setName, date, setDate, filters, setFilters, data };
}