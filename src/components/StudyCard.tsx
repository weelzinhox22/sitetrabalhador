
import { ReactNode } from 'react';

interface StudyCardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function StudyCard({ title, children, icon, className = '' }: StudyCardProps) {
  return (
    <div className={`study-card bg-white rounded-lg shadow-md p-5 ${className}`}>
      <h3 className="text-lg font-semibold text-health-700 flex items-center gap-2 mb-3">
        {icon && <span className="text-health-600">{icon}</span>}
        <span>{title}</span>
      </h3>
      <div>
        {children}
      </div>
    </div>
  );
}
