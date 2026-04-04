import React from "react";

type ButtonProps = {
  variant?: "primary" | "outline";
  size?: "default" | "large";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  variant = "primary",
  size = "default",
  href,
  target,
  rel,
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 whitespace-nowrap";

  const sizeClass =
    size === "large" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";

  const variantClass =
    variant === "primary"
      ? "bg-brand-teal text-brand-slate hover:brightness-110 hover:scale-[1.02]"
      : "bg-transparent border border-white/20 text-white hover:border-brand-teal/60 hover:text-brand-teal";

  const classes = `${base} ${sizeClass} ${variantClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
