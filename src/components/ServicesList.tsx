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
      description: "Work gangs and casual staff management for efficient warehouse operations.",
      features: ["Work gangs management", "Casual staff coordination", "Inventory support", "Operations oversight"]
    },
    {
      icon: Users,
      title: "Contracted Staff Management",
      description: "Management of staff on 3, 6 to 12 months renewable contracts.",
      features: ["Contract management", "Staff deployment", "Performance monitoring", "Renewal coordination"]
    },
    {
      icon: Search,
      title: "Head Hunting Services",
      description: "Recruitment of Technical and Professional staff for specialized roles.",
      features: ["Technical recruitment", "Professional search", "Skills assessment", "Placement services"]
    },
    {
      icon: Calculator,
      title: "Payroll Services & Statutory Deductions",
      description: "Complete payroll processing including NHIF, NSSF, PAYE and other statutory deductions.",
      features: ["Direct deposit reports", "Payroll registers", "Statutory deductions (NHIF, NSSF)", "PAYE calculations", "Reimbursements & expenses", "Bonus management", "Leave encashments", "Loan management", "Hard & soft payslips generation"]
    },
    {
      icon: Shield,
      title: "Staff Health & Safety Training",
      description: "Comprehensive workplace safety training and compliance programs.",
      features: ["Safety protocols", "Compliance training", "Risk assessment", "Emergency procedures"]
    },
    {
      icon: Ambulance,
      title: "Insurance & Ambulance Services",
      description: "Staff insurance (WIBA) and ambulance services for workplace safety.",
      features: ["WIBA insurance coverage", "Emergency medical services", "Medical support", "Health programs"]
    }
  ];

  const developmentServices = [
    {
      icon: GraduationCap,
      title: "Management Consultancy & Advisory Services",
      description: "Strategic business consulting and organizational development solutions.",
      features: ["Strategic planning", "Process improvement", "Change management", "Performance optimization"]
    },
    {
      icon: TrendingUp,
      title: "Leadership & Supervisors Training Programs",
      description: "Comprehensive leadership development programs for organizational leaders.",
      features: ["Leadership development", "Management skills", "Supervisory training", "Executive coaching"]
    },
    {
      icon: Shield,
      title: "Health & Safety Training",
      description: "Specialized health and safety training programs for workplace compliance.",
      features: ["Safety protocols", "Workplace safety", "Compliance training", "Risk management"]
    },
    {
      icon: HeartHandshake,
      title: "Team Building",
      description: "Team development and collaboration enhancement programs.",
      features: ["Team dynamics", "Communication skills", "Conflict resolution", "Performance improvement"]
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