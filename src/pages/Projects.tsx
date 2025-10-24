import Navbar from "@/components/Navbar";
import CaseStudyCard from "@/components/CaseStudyCard";
import SectionTitle from "@/components/SectionTitle";
import Footer from "@/components/Footer";
import linkageProject from "../assets/linkage-project.jpg";

const Projects = () => {
  const backgroundImageURL = linkageProject;
  const caseStudies = [
    {
      title: "Organizational Structure & HR Systems Review",
      client: "First Community Bank",
      description:
        "Comprehensive review of FCB's organisation structure and HR systems. A new structure was developed, accompanied by comprehensive KRAs for each role in the bank.",
      services: [
        "Organizational Structure",
        "HR Systems Review",
        "KRA Development",
        "Staff Assessment",
        "Payroll Outsourcing",
      ],
      outcomes: [
        "New organizational structure with clear role definitions",
        "Comprehensive KRAs for all bank positions",
        "Staff assessment and recommended actions report",
        "Improved HR processes including recruitment and training",
        "Enhanced performance management system",
      ],
      duration: "Ongoing project",
      teamSize: "8 consultants",
    },
    {
      title: "Organizational & Staffing Structure Review",
      client: "EADB Bank",
      description:
        "Complete review of organization and staffing structure resulting in a new optimized structure that reduced staffing levels significantly while improving efficiency.",
      services: [
        "Organizational Design",
        "Staff Assessment",
        "Salary Structure Review",
        "Board Presentation",
        "Payroll Outsourcing",
      ],
      outcomes: [
        "36% reduction in staffing levels through optimization",
        "Comprehensive staff assessment for position suitability",
        "Market-aligned salary structure revision",
        "Board of directors presentation and approval",
        "Enhanced capacity to attract senior staff",
      ],
      duration: "6 months",
      teamSize: "10 consultants",
    },
    {
      title: "Operations Review & Job Evaluation",
      client: "Post Office Savings Bank",
      description:
        "Comprehensive operations review including new structure development, KRA creation, job evaluation, and salary survey implementation.",
      services: [
        "Operations Review",
        "KRA Development",
        "Job Evaluation",
        "Salary Survey",
        "Scheme of Service Update",
      ],
      outcomes: [
        "New operational structure with comprehensive KRAs",
        "Complete staff assessment and selection process",
        "Updated scheme of service documentation",
        "Market-based salary structure development",
        "Improved organizational efficiency",
      ],
      duration: "8 months",
      teamSize: "12 consultants",
    },
    {
      title: "Performance Management & Payroll Systems",
      client: "Uganda Gatsby Trust",
      description:
        "Implementation of performance management system following job evaluation and grading system to achieve strategic objectives.",
      services: [
        "Performance Management",
        "Employee Training",
        "Payroll Management",
        "Strategic Alignment",
      ],
      outcomes: [
        "Performance management system implementation",
        "Employee training on objective setting and tracking",
        "Improved performance review processes",
        "Enhanced achievement of strategic objectives",
        "Streamlined casual and contracted staff payroll",
      ],
      duration: "4 months",
      teamSize: "6 consultants",
    },
    {
      title: "Multi-Country Job Evaluation Project",
      client: "Unilever East & Southern Africa",
      description:
        "Comprehensive job evaluation and grading exercise covering assistant managers and supervisors across 6 countries using the Peromnes Job Evaluation System.",
      services: [
        "Job Evaluation",
        "Grading System",
        "Regional Standardization",
        "Organizational Analysis",
      ],
      outcomes: [
        "Job evaluation across 8 units in 6 countries (Kenya, Uganda, Tanzania, Malawi, Zambia, Mozambique)",
        "Rationalized grading structure and job titles",
        "Identified organizational and job structure anomalies",
        "Standardized approach across manufacturing, tea estates, hospitals, and schools",
        "Improved payroll and staff management systems",
      ],
      duration: "12 months",
      teamSize: "15 consultants",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="bg-primary text-primary-foreground py-16"
        style={
          backgroundImageURL
            ? {
                backgroundImage: `linear-gradient(rgba(0, 140, 69, 0.2), rgba(1, 38, 20, 0.5)), url(${backgroundImageURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Projects</h1>
            <p className="text-xl opacity-90">
              Discover how we've helped leading organizations across East Africa
              achieve their business transformation goals
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
              <div className="text-4xl font-bold text-primary mb-2">
                10,000+
              </div>
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
