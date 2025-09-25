import React from 'react';
import KPICard from '../components/Charts/KPICard';
import BarMonthlyDocs from '../components/Charts/BarMonthlyDocs';
import PieByTipologia from '../components/Charts/PieByTipologia';
import LineUploadSize from '../components/Charts/LineUploadSize';
import { kpis, monthlyDocs, tipologiaDist, uploadAvg } from '../utils/mockDashboard';

export default function Dashboard(){
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid sm:grid-cols-3 gap-4">
        <KPICard label="Municípios" value={kpis.municipios} />
        <KPICard label="Documentos" value={kpis.documentos} />
        <KPICard label="Pendências (mês)" value={kpis.pendenciasMes} />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="card p-4 lg:col-span-2">
          <div className="font-semibold mb-2 text-slateink">Envios por mês (últimos 6)</div>
          <BarMonthlyDocs data={monthlyDocs} />
        </div>

        <div className="card p-4">
          <div className="font-semibold mb-2 text-slateink">Distribuição por Tipologia</div>
          <PieByTipologia data={tipologiaDist} />
        </div>

        <div className="card p-4 lg:col-span-3">
          <div className="font-semibold mb-2 text-slateink">Tamanho médio de upload (MB)</div>
          <LineUploadSize data={uploadAvg} />
        </div>
      </div>
    </div>
  );
}