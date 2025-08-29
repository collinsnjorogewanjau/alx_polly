import * as React from "react";

export type ButtonVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost"
  | "link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  asChild?: boolean;
}

const variantToClassName: Record<ButtonVariant, string> = {
  default:
    "bg-foreground text-background hover:opacity-90 disabled:opacity-50 disabled:pointer-events-none",
  secondary:
    "bg-muted text-foreground hover:bg-muted/80 disabled:opacity-50 disabled:pointer-events-none",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none",
  outline:
    "border border-border bg-transparent hover:bg-accent disabled:opacity-50 disabled:pointer-events-none",
  ghost:
    "bg-transparent hover:bg-accent disabled:opacity-50 disabled:pointer-events-none",
  link:
    "bg-transparent underline-offset-4 hover:underline text-primary disabled:opacity-50 disabled:pointer-events-none",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className = "", variant = "default", asChild, children, ...props },
  ref
) {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const variantClass = variantToClassName[variant];
  const classes = `${base} ${variantClass} ${className}`.trim();

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>;
    const childClassName = (child.props?.className as string) || "";
    return React.cloneElement(child, {
      ...props,
      className: `${classes} ${childClassName}`.trim(),
    });
  }

  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  );
});

export default Button;


