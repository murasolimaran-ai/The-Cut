import React from 'react';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {label && (
        <div className={`flex items-center gap-3 mb-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className="w-6 h-[1px] bg-[#D6A85F]" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D6A85F]">
            {label}
          </span>
          {isCenter && <span className="w-6 h-[1px] bg-[#D6A85F]" />}
        </div>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight text-[#F5F2EA] leading-[1.15] uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#F5F2EA]/70 font-light leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
