import ServiceCard from './ServiceCard';
import { 
  Building2, 
  Users, 
  Search, 
  Calculator, 
  Shield, 
  Ambulance,
  GraduationCap,
  TrendingUp,
  UserCheck,
  HeartHandshake
} from 'lucide-react';
import SectionTitle from './SectionTitle';

const ServicesList = () => {
  const bpoServices = [
    {
      icon: Building2,
      title: "Warehouse Management",
      description: "Comprehensive warehouse operations and logistics management solutions.",
      features: ["Inventory optimization", "Process automation", "Quality control", "Supply chain management"]
    },
    {
      icon: Users,
      title: "Contracted Staff Management",
      description: "End-to-end management of contracted personnel and workforce solutions.",
      features: ["Staff deployment", "Performance monitoring", "Compliance management", "Contract administration"]
    },
    {
      icon: Search,
      title: "Head Hunting",
      description: "Executive search and recruitment services for senior-level positions.",
      features: ["Executive search", "Talent acquisition", "Skills assessment", "Reference checking"]
    },
    {
      icon: Calculator,
      title: "Payroll & Statutory Deductions",
      description: "Complete payroll processing and statutory compliance management.",
      features: ["Payroll processing", "Tax calculations", "Statutory compliance", "Benefits administration"]
    },
    {
      icon: Shield,
      title: "Health & Safety Training",
      description: "Comprehensive workplace safety training and compliance programs.",
      features: ["Safety protocols", "Risk assessment", "Compliance training", "Emergency procedures"]
    },
    {
      icon: Ambulance,
      title: "Insurance & Ambulance",
      description: "Insurance management and emergency medical services coordination.",
      features: ["Insurance claims", "Medical support", "Emergency response", "Health programs"]
    }
  ];

  const developmentServices = [
    {
      icon: GraduationCap,
      title: "Consultancy Services",
      description: "Strategic business consulting and organizational development solutions.",
      features: ["Strategic planning", "Process improvement", "Change management", "Performance optimization"]
    },
    {
      icon: TrendingUp,
      title: "Leadership Training",
      description: "Executive and management development programs for organizational leaders.",
      features: ["Leadership development", "Management skills", "Strategic thinking", "Executive coaching"]
    },
    {
      icon: HeartHandshake,
      title: "Team Building",
      description: "Team development and collaboration enhancement programs.",
      features: ["Team dynamics", "Communication skills", "Conflict resolution", "Performance improvement"]
    },
    {
      icon: UserCheck,
      title: "HR Support",
      description: "Comprehensive human resources support and development services.",
      features: ["HR strategy", "Policy development", "Employee relations", "Performance management"]
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive business solutions designed to drive your organization's success"
        />

        {/* BPO Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            Business Processing Outsourcing (BPO)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bpoServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Development Services */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            Employee & Organizational Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {developmentServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;