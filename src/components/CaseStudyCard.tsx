import { ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  client: string;
  description: string;
  services: string[];
  outcomes: string[];
  duration?: string;
  teamSize?: string;
}

const CaseStudyCard = ({ 
  title, 
  client, 
  description, 
  services, 
  outcomes, 
  duration,
  teamSize 
}: CaseStudyCardProps) => {
  return (
    <div className="bg-card p-6 rounded-lg card-shadow hover:shadow-hover transition-smooth">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-secondary font-medium">{client}</p>
      </div>

      <p className="text-muted-foreground mb-6">{description}</p>

      {/* Project Details */}
      {(duration || teamSize) && (
        <div className="flex gap-4 mb-6">
          {duration && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={16} className="text-primary" />
              <span>{duration}</span>
            </div>
          )}
          {teamSize && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users size={16} className="text-primary" />
              <span>{teamSize}</span>
            </div>
          )}
        </div>
      )}

      {/* Services Provided */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <ExternalLink size={16} className="text-primary" />
          Services Provided
        </h4>
        <div className="flex flex-wrap gap-2">
          {services.map((service, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      {/* Outcomes */}
      <div>
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <TrendingUp size={16} className="text-secondary" />
          Key Outcomes
        </h4>
        <ul className="space-y-2">
          {outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CaseStudyCard;