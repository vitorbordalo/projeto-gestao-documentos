import React from 'react';
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
} from 'recharts';

export default function AreaCumulative({ data }) {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="gradRoyal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0B3D91" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="#0B3D91" stopOpacity={0.05}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="mes" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Area type="monotone" dataKey="cumulado" stroke="#0B3D91" fill="url(#gradRoyal)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}