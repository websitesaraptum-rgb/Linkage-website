import { ArrowRight } from 'lucide-react';

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
  backgroundImage 
}: HeroSectionProps) => {
  return (
    <section 
      className="relative bg-primary text-primary-foreground py-20 md:py-32"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(0, 140, 69, 0.8), rgba(0, 140, 69, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-semibold text-secondary">
            {subtitle}
          </p>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
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