import type { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  icon?: ReactNode;
}

const SectionHeader = ({ title, description, icon }: SectionHeaderProps) => {
  return (
    <div className="flex items-center mb-8">
      <div className="w-1 h-8 bg-gradient-to-b from-pku-red to-pku-red-dark mr-4 rounded-full" />
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-2xl md:text-[1.7rem] font-bold font-serif text-gray-900 dark:text-gray-100 tracking-tightish flex items-center gap-2">
          {icon && <span className="text-pku-red">{icon}</span>}
          {title}
        </h2>
        {description && (
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1.5 font-medium">{description}</p>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;