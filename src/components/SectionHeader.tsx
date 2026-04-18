import type { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  icon?: ReactNode;
}

const SectionHeader = ({ title, description, icon }: SectionHeaderProps) => {
  return (
    <div className="flex items-center mb-8">
      <div className="w-1.5 h-7 bg-pku-red mr-4 rounded-full shadow-sm" />
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
          {icon && <span className="text-pku-red">{icon}</span>}
          {title}
        </h2>
        {description && (
          <p className="text-gray-500 text-sm mt-1 font-medium">{description}</p>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;