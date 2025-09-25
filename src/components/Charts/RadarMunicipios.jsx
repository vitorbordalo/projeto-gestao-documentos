import React from 'react';
import {
  ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip,
} from 'recharts';

export default function RadarMunicipios({ data }) {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="municipio" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tickFormatter={(v)=>`${v}%`} />
          <Tooltip formatter={(v)=>[`${v}%`, 'Cobertura']} />
          <Radar name="Cobertura" dataKey="percent" stroke="#0B3D91" fill="#0B3D91" fillOpacity={0.4} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}