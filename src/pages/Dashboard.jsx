import React from 'react';
import KPICard from '../components/Charts/KPICard';
import BarMonthlyDocs from '../components/Charts/BarMonthlyDocs';
import PieByTipologia from '../components/Charts/PieByTipologia';
import LineUploadSize from '../components/Charts/LineUploadSize';
import {
  kpis, monthlyDocs, tipologiaDist, uploadAvg,
  statusDist, municipiosRadar, scatterData, cumulative, secretariaStack
} from '../utils/mockDashboard';
import DonutStatus from '../components/Charts/DonutStatus';
import RadarMunicipios from '../components/Charts/RadarMunicipios';
import ScatterValorTamanho from '../components/Charts/ScatterValorTamanho';
import AreaCumulative from '../components/Charts/AreaCumulative';
import StackedBySecretaria from '../components/Charts/StackedBySecretaria';

export default function Dashboard(){
  return (
    <div className="max-w-screen-2xl mx-auto space-y-6">
      <h1 className="text-lg font-semibold text-[var(--ink)]">Painel</h1>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="card p-4"><div className="text-sm text-[var(--ink)]/70">Municípios</div><div className="text-2xl font-semibold">{kpis.municipios}</div></div>
        <div className="card p-4"><div className="text-sm text-[var(--ink)]/70">Documentos</div><div className="text-2xl font-semibold">{kpis.documentos.toLocaleString('pt-BR')}</div></div>
        <div className="card p-4"><div className="text-sm text-[var(--ink)]/70">Pendências (mês)</div><div className="text-2xl font-semibold">{kpis.pendenciasMes}</div></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="card p-4 lg:col-span-2">
          <div className="font-semibold mb-2">Envios por mês (últimos 6)</div>
          <BarMonthlyDocs data={monthlyDocs} />
        </div>
        <div className="card p-4">
          <div className="font-semibold mb-2">Distribuição por Tipologia</div>
          <PieByTipologia data={tipologiaDist} />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="card p-4">
          <div className="font-semibold mb-2">Status dos Itens</div>
          <DonutStatus data={statusDist} />
        </div>
        <div className="card p-4">
          <div className="font-semibold mb-2">Cobertura por Município</div>
          <RadarMunicipios data={municipiosRadar} />
        </div>
        <div className="card p-4">
          <div className="font-semibold mb-2">Valor x Tamanho de Upload</div>
          <ScatterValorTamanho data={scatterData} />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="card p-4 lg:col-span-2">
          <div className="font-semibold mb-2">Documentos (acumulado no ano)</div>
          <AreaCumulative data={cumulative} />
        </div>
        <div className="card p-4">
          <div className="font-semibold mb-2">Proporção por Secretaria</div>
          <StackedBySecretaria data={secretariaStack} />
        </div>
      </div>
    </div>
  );
}