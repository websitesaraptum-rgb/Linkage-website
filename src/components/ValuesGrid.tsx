import { Eye, Target, Heart, Star } from 'lucide-react';

const ValuesGrid = () => {
  const values = [
    {
      icon: Eye,
      title: "Vision",
      content: "To be the leading Corporate Solutions Provider in the region known for driving business performance through understanding customer needs and exceeding their Expectations.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Target,
      title: "Mission",
      content: "By listening, understanding, and delivering innovative learning and performance based solutions resulting in competitive advantages for our clients.",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Heart,
      title: "Motto",
      content: "People, Skills, Progress - Driving business performance through understanding customer needs and exceeding expectations.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Star,
      title: "Core Values",
      content: "Integrity • Teamwork & Respect • Communications • Commitment • Initiative & Innovation",
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