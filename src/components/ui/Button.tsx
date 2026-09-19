import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-card focus-visible:outline-brand-600",
  secondary: "bg-charcoal-900 text-white hover:bg-charcoal-800 shadow-card focus-visible:outline-charcoal-900",
  outline: "border border-charcoal-200 text-charcoal-800 hover:border-brand-400 hover:text-brand-600 bg-white",
  ghost: "text-charcoal-700 hover:bg-charcoal-100",
  gold: "bg-gold-400 text-charcoal-900 hover:bg-gold-300 shadow-card",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3.5 py-2 text-sm rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-xl",
  lg: "px-7 py-3.5 text-base rounded-xl",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined };

interface ButtonAsLink extends CommonProps {
  to: string;
  href?: undefined;
}

interface ButtonAsAnchor extends CommonProps {
  href: string;
  to?: undefined;
  target?: string;
  rel?: string;
}

type Props = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export function Button(props: Props) {
  const { variant = "primary", size = "md", icon, iconRight, className = "", children } = props;
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";
  const cls = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {icon}
        {children}
        {iconRight}
      </Link>
    );
  }
  if ("href" in props && props.href) {
    return (
      <a href={props.href} target={props.target} rel={props.rel} className={cls}>
        {icon}
        {children}
        {iconRight}
      </a>
    );
  }
  const { variant: _v, size: _s, icon: _i, iconRight: _ir, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={cls} {...rest}>
      {icon}
      {children}
      {iconRight}
    </button>
  );
}
