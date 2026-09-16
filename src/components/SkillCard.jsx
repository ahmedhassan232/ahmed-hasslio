import React, { useEffect, useRef, useState } from 'react';
import * as Icons from 'lucide-react';

export default function SkillCard({ group }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Icon = Icons[group.icon] || Icons.BarChart3;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="card skill-group-card" ref={ref}>
      <div className="section-card-title" style={{ marginBottom: 16 }}>
        <Icon size={18} color={group.color} />
        {group.title}
      </div>
      {group.skills.map((s) => (
        <div className="skill-row" key={s.name}>
          <div className="skill-row-top">
            <span className="skill-row-name">{s.name}</span>
            <span className="skill-row-pct mono">{s.level}%</span>
          </div>
          <div className="skill-bar-track">
            <div
              className="skill-bar-fill"
              style={{
                width: visible ? `${s.level}%` : '0%',
                background: group.color,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
