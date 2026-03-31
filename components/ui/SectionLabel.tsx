import React from "react";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-teal ${className}`.trim()}
    >
      <span className="block h-[2px] w-4 bg-brand-teal" />
      {children}
    </span>
  );
}
