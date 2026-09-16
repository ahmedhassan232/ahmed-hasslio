import React, { useEffect, useState } from 'react';

export default function Loader({ visible }) {
  const [progress, setProgress] = useState(8);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setProgress((p) => (p >= 96 ? 96 : p + Math.random() * 18));
    }, 140);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div className={`loader-screen ${visible ? '' : 'hidden'}`} role="status" aria-live="polite">
      <div className="loader-avatar">AH</div>
      <div className="loader-name">Ahmed Hassan Sayed</div>
      <div className="loader-tag">Data Analyst Portfolio</div>
      <div className="loader-bar-track">
        <div className="loader-bar-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
      </div>
    </div>
  );
}
