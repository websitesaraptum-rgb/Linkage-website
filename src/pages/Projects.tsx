import Navbar from '@/components/Navbar';
import CaseStudyCard from '@/components/CaseStudyCard';
import SectionTitle from '@/components/SectionTitle';
import Footer from '@/components/Footer';

const Projects = () => {
  const caseStudies = [
    {
      title: "Organizational Restructuring & Payroll Implementation",
      client: "First Community Bank",
      description: "Comprehensive organizational structure redesign, payroll system implementation, and staff training program for one of Rwanda's leading financial institutions.",
      services: ["Organizational Structure", "Payroll Management", "Staff Training", "Process Optimization"],
      outcomes: [
        "30% improvement in operational efficiency",
        "Streamlined payroll processing reducing errors by 95%",
        "Enhanced organizational structure with clear reporting lines",
        "Comprehensive training program for 200+ employees"
      ],
      duration: "8 months",
      teamSize: "12 consultants"
    },
    {
      title: "Staffing Structure & Board Presentation",
      client: "EADB Bank",
      description: "Development of optimal staffing structure and presentation to board of directors for the East African Development Bank's regional operations.",
      services: ["Staffing Analysis", "Organizational Design", "Board Consultation", "Strategic Planning"],
      outcomes: [
        "Optimized staffing model across 6 regional offices",
        "25% reduction in operational costs",
        "Improved role clarity and accountability",
        "Board approval for new organizational structure"
      ],
      duration: "4 months",
      teamSize: "8 consultants"
    },
    {
      title: "KRA Development & Job Evaluation",
      client: "Post Office Savings Bank",
      description: "Comprehensive Key Result Areas (KRA) development, job evaluation system, and salary survey implementation for organizational performance enhancement.",
      services: ["KRA Development", "Job Evaluation", "Salary Survey", "Performance Systems"],
      outcomes: [
        "Clear performance metrics for all positions",
        "Market-aligned compensation structure",
        "Improved employee performance tracking",
        "Enhanced organizational accountability"
      ],
      duration: "6 months",
      teamSize: "10 consultants"
    },
    {
      title: "Performance Management & Payroll Systems",
      client: "Uganda Gatsby Trust",
      description: "Implementation of comprehensive performance management system and payroll optimization for the leading skills development organization.",
      services: ["Performance Management", "Payroll Systems", "Process Improvement", "Training"],
      outcomes: [
        "Automated performance review processes",
        "Real-time payroll processing capabilities",
        "Improved employee engagement scores",
        "Reduced administrative overhead by 40%"
      ],
      duration: "5 months",
      teamSize: "6 consultants"
    },
    {
      title: "Multi-Country Job Evaluation Project",
      client: "Unilever ESA",
      description: "Large-scale job evaluation project across 6 East African countries, standardizing roles and compensation structures for regional consistency.",
      services: ["Job Evaluation", "Regional Standardization", "Compensation Analysis", "Change Management"],
      outcomes: [
        "Standardized job grades across 6 countries",
        "Harmonized compensation structures",
        "Improved internal equity and fairness",
        "Enhanced regional mobility for employees"
      ],
      duration: "12 months",
      teamSize: "15 consultants"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Projects</h1>
            <p className="text-xl opacity-90">
              Discover how we've helped leading organizations across East Africa achieve their business transformation goals
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            title="Case Studies"
            subtitle="Real results from our client partnerships"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Impact */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionTitle
            title="Project Impact"
            subtitle="Measurable results across our client engagements"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">6</div>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-muted-foreground">Employees Impacted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">95%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;