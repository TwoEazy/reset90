import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "default" | "large";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
}: CTAButtonProps) {
  const base =
    "btn-gold inline-block font-bold tracking-wider uppercase transition-all duration-400 text-center";
  const sizes = {
    default: "text-sm px-10 py-4 rounded-md",
    large: "text-base md:text-lg px-12 md:px-16 py-5 md:py-6 rounded-md",
  };
  const variants = {
    primary:
      "bg-gold text-dark hover:bg-gold-light hover:shadow-xl hover:shadow-gold/25 hover:scale-[1.02]",
    outline:
      "border-2 border-gold text-gold hover:bg-gold hover:text-dark hover:shadow-xl hover:shadow-gold/25 hover:scale-[1.02]",
  };
  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
