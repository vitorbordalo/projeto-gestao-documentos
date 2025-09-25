// KPIs simulados
export const kpis = {
  municipios: 8,
  documentos: 4219,
  pendenciasMes: 37,
};

// Últimos 6 meses
export const monthlyDocs = [
  { mes: 'Abr', envios: 520 },
  { mes: 'Mai', envios: 610 },
  { mes: 'Jun', envios: 690 },
  { mes: 'Jul', envios: 580 },
  { mes: 'Ago', envios: 720 },
  { mes: 'Set', envios: 645 },
];

// Distribuição por tipologia
export const tipologiaDist = [
  { tipo: 'Nota Fiscal', qtd: 46 },
  { tipo: 'Contrato',   qtd: 22 },
  { tipo: 'Recibo',     qtd: 12 },
  { tipo: 'Relatório',  qtd: 20 },
];

// Tamanho médio de upload por mês (MB)
export const uploadAvg = [
  { mes: 'Abr', mediaMB: 18.4 },
  { mes: 'Mai', mediaMB: 22.1 },
  { mes: 'Jun', mediaMB: 19.8 },
  { mes: 'Jul', mediaMB: 24.3 },
  { mes: 'Ago', mediaMB: 21.0 },
  { mes: 'Set', mediaMB: 23.2 },
];

// Barras empilhadas por Secretaria (proporção por mês)
export const secretariaStack = [
  { mes: 'Jun', Saúde: 120, Educação: 80, Finanças: 60, Administração: 40 },
  { mes: 'Jul', Saúde: 110, Educação: 95, Finanças: 70, Administração: 35 },
  { mes: 'Ago', Saúde: 140, Educação: 100, Finanças: 85, Administração: 50 },
  { mes: 'Set', Saúde: 125, Educação: 90, Finanças: 75, Administração: 55 },
];

// Radar de cobertura por município (MA, % de itens entregues no mês)
export const municipiosRadar = [
  { municipio: 'São Luís',            percent: 88 },
  { municipio: 'Imperatriz',          percent: 76 },
  { municipio: 'São José de Ribamar', percent: 69 },
  { municipio: 'Timon',               percent: 62 },
  { municipio: 'Caxias',              percent: 71 },
  { municipio: 'Paço do Lumiar',      percent: 65 },
  { municipio: 'Açailândia',          percent: 73 },
  { municipio: 'Bacabal',             percent: 58 },
];

// Série cumulativa de documentos (acumulado no ano)
export const cumulative = [
  { mes: 'Jan', cumulado: 310 },
  { mes: 'Fev', cumulado: 720 },
  { mes: 'Mar', cumulado: 1210 },
  { mes: 'Abr', cumulado: 1730 },
  { mes: 'Mai', cumulado: 2340 },
  { mes: 'Jun', cumulado: 3030 },
  { mes: 'Jul', cumulado: 3610 },
  { mes: 'Ago', cumulado: 4330 },
  { mes: 'Set', cumulado: 4975 },
];

// Donut de status
export const statusDist = [
  { status: 'Entregues',    qtd: 62 },
  { status: 'Em validação', qtd: 21 },
  { status: 'Pendentes',    qtd: 17 },
];

// Dispersão Valor x Tamanho (amostral)
export const scatterData = [
  { valor: 9500,  mb: 12, paginas: 34 },
  { valor: 18000, mb: 25, paginas: 80 },
  { valor: 4200,  mb: 6,  paginas: 18 },
  { valor: 53000, mb: 44, paginas: 150 },
  { valor: 21000, mb: 28, paginas: 95 },
  { valor: 7500,  mb: 9,  paginas: 22 },
  { valor: 38000, mb: 32, paginas: 120 },
];