import React, { useEffect, useRef, useState } from 'react';

const palette = ['var(--accent-blue)', 'var(--accent-green)', 'var(--accent-purple)', 'var(--accent-orange)', 'var(--accent-blue)', 'var(--accent-green)'];

export default function BarChart({ data }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {data.map((d, i) => (
        <div className="skill-row" key={d.name}>
          <div className="skill-row-top">
            <span className="skill-row-name">{d.name}</span>
            <span className="skill-row-pct mono">{d.level}%</span>
          </div>
          <div className="skill-bar-track">
            <div
              className="skill-bar-fill"
              style={{
                width: visible ? `${d.level}%` : '0%',
                background: palette[i % palette.length],
                transitionDelay: `${i * 60}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
