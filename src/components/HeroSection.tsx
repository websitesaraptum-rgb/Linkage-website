import { ArrowRight } from "lucide-react";

import linkageHero from "../assets/linkage-hero.png";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
}: HeroSectionProps) => {
  const backgroundImageURL = linkageHero;
  return (
    <section
      className="relative bg-primary text-primary-foreground py-20 md:py-32"
      // Use the new variable name in the style
      style={
        backgroundImageURL
          ? {
              backgroundImage: `linear-gradient(rgba(0, 140, 69, 0.8), rgba(1, 38, 20, 0.5)), url(${backgroundImageURL})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">{title}</h1>
          <p className="text-xl md:text-2xl mb-4 font-semibold text-secondary">
            People, Skills, Progress
          </p>
          <p
            className="text-lg mb-8 opacity-100 max-w-2xl mx-auto font-semibold"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            {description}
          </p>
          <a
            href={ctaLink}
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-smooth card-shadow"
          >
            {ctaText}
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
