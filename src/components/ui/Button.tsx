import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface CommonButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  "aria-label"?: string;
  title?: string;
  id?: string;
}

interface ButtonAsButtonProps extends CommonButtonProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

interface ButtonAsLinkProps extends CommonButtonProps {
  href: string;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-background font-semibold hover:bg-primary-hover active:opacity-90 shadow-xs",
  secondary:
    "border border-border bg-surface text-foreground font-medium hover:bg-surface-raised hover:border-foreground-muted/30 active:opacity-90",
  ghost:
    "text-foreground-muted font-medium hover:text-foreground hover:bg-surface/60 active:opacity-90",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs gap-1.5 rounded-sm",
  md: "h-10 px-4 text-sm gap-2 rounded-md",
  lg: "h-12 px-6 text-base gap-2.5 rounded-md",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    children,
    className = "",
    disabled = false,
    "aria-label": ariaLabel,
    title,
    id,
  } = props;

  const baseClasses =
    "inline-flex items-center justify-center transition-colors duration-150 select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed";
  const classes = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (props.href !== undefined) {
    const { href, external, onClick } = props;

    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...(ariaLabel !== undefined ? { "aria-label": ariaLabel } : {})}
          {...(title !== undefined ? { title } : {})}
          {...(id !== undefined ? { id } : {})}
          {...(disabled ? { "aria-disabled": true, tabIndex: -1 } : {})}
          {...(onClick !== undefined ? { onClick } : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        {...(ariaLabel !== undefined ? { "aria-label": ariaLabel } : {})}
        {...(title !== undefined ? { title } : {})}
        {...(id !== undefined ? { id } : {})}
        {...(disabled ? { "aria-disabled": true, tabIndex: -1 } : {})}
        {...(onClick !== undefined ? { onClick } : {})}
      >
        {children}
      </Link>
    );
  }

  const { type = "button", onClick } = props;

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      {...(ariaLabel !== undefined ? { "aria-label": ariaLabel } : {})}
      {...(title !== undefined ? { title } : {})}
      {...(id !== undefined ? { id } : {})}
      {...(onClick !== undefined ? { onClick } : {})}
    >
      {children}
    </button>
  );
}
