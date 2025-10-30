import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

import hero1 from "../assets/businessman.jpg";
import hero2 from "../assets/linkage-project.jpg";
import hero3 from "../assets/linkage-client.jpg"; // <-- optional extra image4
import hero4 from "../assets/linkage-logo-bg.jpg";

interface HeroSectionProps {
  ctaText: string;
  ctaLink: string;
}

const HeroSection = ({ ctaText, ctaLink }: HeroSectionProps) => {
  // Array of slides
  const slides = [
    {
      title: "Linkage Outsourcing Services Ltd.",
      subtitle: "People, Skills, Progress",
      description:
        "Over a decade of experience empowering businesses through professional outsourcing, training, and consultancy across East Africa.",
      image: hero1,
    },
    {
      title: "Transforming Organizations",
      subtitle: "Growth Through Excellence",
      description:
        "We help organizations optimize performance and unlock their full potential through strategic development programs.",
      image: hero2,
    },
    {
      title: "Trusted by Leading Institutions",
      subtitle: "Collaboration for Impact",
      description:
        "Partnering with international and regional organizations to deliver measurable business results.",
      image: hero3,
    },
    {
      title: "logo",
      subtitle: "",
      description: "",
      image: hero4,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative bg-primary text-primary-foreground min-h-[500px] md:min-h-[700px] flex items-center justify-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 140, 69, 0.1), rgba(1, 38, 20, 0.1)), url(${slide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optional overlay fade */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative container text-center z-10">
        <div className="max-w-4xl mx-auto text-center transition-opacity duration-1000 ease-in-out">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold">{slide.title}</h1>
          <p className="text-xl md:text-2xl mb-4 font-semibold text-secondary">
            {slide.subtitle}
          </p>
          <p
            className="text-lg mb-8 opacity-100 max-w-2xl mx-auto font-semibold text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
          >
            {slide.description}
          </p>
          <a
            href={ctaLink}
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-smooth card-shadow"
          >
            {ctaText}
            <ArrowRight size={20} />
          </a>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentSlide ? "bg-secondary" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
