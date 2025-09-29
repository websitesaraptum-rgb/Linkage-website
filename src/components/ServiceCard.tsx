import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <div className="bg-card p-6 rounded-lg card-shadow hover:shadow-hover transition-smooth">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-primary/10 rounded-lg mr-4">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      {features && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;