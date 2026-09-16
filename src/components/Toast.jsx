import React from 'react';
import { CheckCircle2, Info, AlertCircle } from 'lucide-react';

const icons = {
  success: <CheckCircle2 size={18} color="var(--accent-green)" />,
  info: <Info size={18} color="var(--accent-blue)" />,
  error: <AlertCircle size={18} color="#E5484D" />,
};

export default function Toast({ toasts }) {
  if (!toasts.length) return null;
  return (
    <div className="toast-container" role="status" aria-live="polite">
      {toasts.map((t) => (
        <div className="toast" key={t.id}>
          {icons[t.type] || icons.success}
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
}
