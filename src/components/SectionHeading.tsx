import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      direction="up"
      className={`mb-10 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 md:mb-4">
        {title}
      </h2>
      <div
        className={`gold-line mb-4 md:mb-6 ${centered ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p className={`text-gray max-w-2xl leading-relaxed text-sm md:text-lg ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
