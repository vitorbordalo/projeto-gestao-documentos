import React from 'react';
import KPICard from '../components/Charts/KPICard';
import BarMonthlyDocs from '../components/Charts/BarMonthlyDocs';
import PieByTipologia from '../components/Charts/PieByTipologia';
import LineUploadSize from '../components/Charts/LineUploadSize';

import StackedBySecretaria from '../components/Charts/StackedBySecretaria';
import RadarMunicipios from '../components/Charts/RadarMunicipios';
import AreaCumulative from '../components/Charts/AreaCumulative';
import DonutStatus from '../components/Charts/DonutStatus';
import ScatterValorTamanho from '../components/Charts/ScatterValorTamanho';

import {
  kpis, monthlyDocs, tipologiaDist, uploadAvg,
  secretariaStack, municipiosRadar, cumulative, statusDist, scatterData,
} from '../utils/mockDashboard';

export default function Dashboard(){
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid sm:grid-cols-3 gap-4">
        <KPICard label="Municípios" value={kpis.municipios} />
        <KPICard label="Documentos" value={kpis.documentos} />
        <KPICard label="Pendências (mês)" value={kpis.pendenciasMes} />
      </div>

      {/* Charts linha 1 */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="card p-4 lg:col-span-2">
          <div className="font-semibold mb-2 text-slateink">Envios por mês (últimos 6)</div>
          <BarMonthlyDocs data={monthlyDocs} />
        </div>
        <div className="card p-4">
          <div className="font-semibold mb-2 text-slateink">Distribuição por Tipologia</div>
          <PieByTipologia data={tipologiaDist} />
        </div>
      </div>

      {/* Charts linha 2 */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="card p-4">
          <div className="font-semibold mb-2 text-slateink">Status dos Itens</div>
          <DonutStatus data={statusDist} />
        </div>
        <div className="card p-4">
          <div className="font-semibold mb-2 text-slateink">Cobertura por Município</div>
          <RadarMunicipios data={municipiosRadar} />
        </div>
        <div className="card p-4">
          <div className="font-semibold mb-2 text-slateink">Valor x Tamanho de Upload</div>
          <ScatterValorTamanho data={scatterData} />
        </div>
      </div>

      {/* Charts linha 3 */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="card p-4 lg:col-span-2">
          <div className="font-semibold mb-2 text-slateink">Documentos (acumulado no ano)</div>
          <AreaCumulative data={cumulative} />
        </div>
        <div className="card p-4">
          <div className="font-semibold mb-2 text-slateink">Proporção por Secretaria</div>
          <StackedBySecretaria data={secretariaStack} />
        </div>
      </div>
    </div>
  );
}