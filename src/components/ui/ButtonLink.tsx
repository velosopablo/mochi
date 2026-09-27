import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl text-base font-bold transition-colors duration-200 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-70";

const variants: Record<Variant, string> = {
  primary: "bg-primary-strong text-white shadow-[0_10px_24px_-10px_rgb(47_128_237/0.7)] hover:bg-deep",
  secondary: "border-2 border-primary bg-white text-deep hover:bg-primary-50",
  ghost: "text-deep hover:bg-primary-50",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5",
  lg: "h-13 px-7",
};

export function buttonClasses({
  variant = "primary",
  size = "lg",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={buttonClasses({ variant, size, className })} {...rest}>
      {children}
    </Link>
  );
}
