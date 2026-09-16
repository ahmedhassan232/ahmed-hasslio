import React, { useState } from 'react';

export default function DonutChart({ data, size = 160, strokeWidth = 22 }) {
  const [hoverIdx, setHoverIdx] = useState(null);
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  let cumulative = 0;

  return (
    <div className="donut-chart-row">
      <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Projects by field donut chart">
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="none" stroke="var(--bg-hover)" strokeWidth={strokeWidth}
          />
          {data.map((d, i) => {
            const fraction = d.value / total;
            const dash = fraction * circumference;
            const offset = -cumulative * circumference;
            cumulative += fraction;
            return (
              <circle
                key={d.name}
                cx={size / 2} cy={size / 2} r={radius}
                fill="none"
                stroke={d.color}
                strokeWidth={hoverIdx === i ? strokeWidth + 3 : strokeWidth}
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={offset}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                style={{ transition: 'stroke-width 0.15s ease', cursor: 'pointer' }}
                onMouseEnter={() => setHoverIdx(i)}
                onMouseLeave={() => setHoverIdx(null)}
              />
            );
          })}
        </svg>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
          justifyContent: 'center', flexDirection: 'column',
        }}>
          <div className="donut-center-text">{hoverIdx !== null ? data[hoverIdx].value : total}</div>
          {hoverIdx !== null && <div style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{data[hoverIdx].name}</div>}
        </div>
      </div>
      <div className="donut-legend">
        {data.map((d, i) => (
          <div
            className="donut-legend-item"
            key={d.name}
            onMouseEnter={() => setHoverIdx(i)}
            onMouseLeave={() => setHoverIdx(null)}
            style={{ cursor: 'pointer', fontWeight: hoverIdx === i ? 700 : 500 }}
          >
            <span className="donut-legend-dot" style={{ background: d.color }} />
            <span>{d.name}</span>
            <span className="donut-legend-value mono">{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
