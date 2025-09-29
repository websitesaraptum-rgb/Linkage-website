import { Eye, Target, Heart, Star } from 'lucide-react';

const ValuesGrid = () => {
  const values = [
    {
      icon: Eye,
      title: "Vision",
      content: "To be the leading business solutions provider across East Africa, recognized for excellence, innovation, and sustainable growth partnerships.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Target,
      title: "Mission",
      content: "To deliver exceptional business process outsourcing and organizational development services that drive measurable results and long-term success for our clients.",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Heart,
      title: "Motto",
      content: "Excellence in Service, Partnership in Growth - Building success together through trusted relationships and proven expertise.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Star,
      title: "Core Values",
      content: "Integrity • Excellence • Innovation • Client Focus • Teamwork • Continuous Learning • Sustainable Growth",
      color: "bg-secondary/10 text-secondary"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">Our Foundation</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The principles that guide our work and define our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="bg-card p-8 rounded-lg card-shadow hover:shadow-hover transition-smooth">
              <div className="flex items-start gap-4">
                <div className={`p-4 rounded-lg ${value.color} flex-shrink-0`}>
                  <value.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesGrid;