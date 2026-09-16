import React, { useState, useId } from 'react';

export default function LineChart({ data, width = 640, height = 220, color = 'var(--accent-blue)' }) {
  const [hoverIdx, setHoverIdx] = useState(null);
  const id = useId();
  const padding = { top: 20, right: 16, bottom: 26, left: 16 };
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;

  const max = Math.max(...data.map((d) => d.value));
  const min = 0;
  const stepX = innerW / (data.length - 1);

  function xFor(i) { return padding.left + i * stepX; }
  function yFor(v) { return padding.top + innerH - ((v - min) / (max - min || 1)) * innerH; }

  const linePoints = data.map((d, i) => `${xFor(i)},${yFor(d.value)}`).join(' ');
  const areaPoints = `${padding.left},${padding.top + innerH} ${linePoints} ${xFor(data.length - 1)},${padding.top + innerH}`;

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} preserveAspectRatio="none" role="img" aria-label="Project activity line chart">
        <defs>
          <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.35" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={areaPoints} fill={`url(#grad-${id})`} />
        <polyline
          points={linePoints}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 1000,
            strokeDashoffset: 0,
            animation: 'drawLine 1.1s ease forwards',
          }}
        />
        {data.map((d, i) => (
          <circle
            key={d.month}
            cx={xFor(i)}
            cy={yFor(d.value)}
            r={hoverIdx === i ? 5.5 : 4}
            fill="var(--bg-card)"
            stroke={color}
            strokeWidth="2.5"
            style={{ cursor: 'pointer', transition: 'r 0.15s ease' }}
            onMouseEnter={() => setHoverIdx(i)}
            onMouseLeave={() => setHoverIdx(null)}
          />
        ))}
        {data.map((d, i) => (
          <text
            key={`label-${d.month}`}
            x={xFor(i)}
            y={height - 6}
            fontSize="11"
            fill="var(--text-tertiary)"
            textAnchor={i === 0 ? 'start' : i === data.length - 1 ? 'end' : 'middle'}
          >
            {d.month}
          </text>
        ))}
      </svg>
      {hoverIdx !== null && (
        <div
          className="chart-tooltip"
          style={{
            left: `${(xFor(hoverIdx) / width) * 100}%`,
            top: `${(yFor(data[hoverIdx].value) / height) * 100}%`,
          }}
        >
          {data[hoverIdx].month}: {data[hoverIdx].value} projects
        </div>
      )}
      <style>{`@keyframes drawLine { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  );
}
