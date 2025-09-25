import React from 'react';
import QuickSearch from '../components/Search/QuickSearch';
import AdvancedFilters from '../components/Search/AdvancedFilters';
import DocumentTable from '../components/Document/DocumentTable';
import useDocuments from '../hooks/useDocuments';

export default function Documents(){
  const { name, setName, date, setDate, filters, setFilters, data } = useDocuments();

  return (
    <div className="space-y-6">
      <div className="card p-4">
        <div className="text-lg font-semibold mb-4">Consulta de Documentos</div>
        <QuickSearch name={name} onName={setName} date={date} onDate={setDate} />
        <div className="h-4" />
        <AdvancedFilters filters={filters} onChange={setFilters} />
      </div>

      <DocumentTable data={data} />
    </div>
  );
}