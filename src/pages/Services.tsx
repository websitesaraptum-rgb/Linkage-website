import Navbar from "@/components/Navbar";
import ServicesList from "@/components/ServicesList";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import servieListen from "../assets/services-listen.jpg";

const Services = () => {
  const backgroundImageURL = servieListen;
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="bg-primary text-primary-foreground py-16"
        style={
          backgroundImageURL
            ? {
                backgroundImage: `linear-gradient(rgba(0, 140, 69, 0.8), rgba(1, 38, 20, 0.5)), url(${backgroundImageURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            {/* <h1 className="mb-6">Our Services</h1>
            <p className="text-xl opacity-90">
              Comprehensive business solutions designed to optimize your
              operations and drive sustainable growth
            </p> */}
          </div>
        </div>
      </section>

      <ServicesList />

      {/* Why Choose Our Services */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionTitle
            title="Why Choose Linkage Outsourcing Services?"
            subtitle="What sets our services apart in the market"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">10+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Years Experience</h3>
              <p className="text-muted-foreground">
                Proven track record of successful project delivery
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">200+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">200+ Organizations</h3>
              <p className="text-muted-foreground">
                Successfully managed organizations across the region
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">4 Countries</h3>
              <p className="text-muted-foreground">
                Regional presence in Rwanda, Kenya, DR Congo and Burundi
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg card-shadow">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Our Approach
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <span>
                    Comprehensive needs assessment and strategy development
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <span>
                    Customized solutions tailored to your specific requirements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <span>
                    Continuous monitoring and optimization for sustained results
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg card-shadow">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Quality Assurance
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <span>
                    ISO-certified processes and quality management systems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <span>
                    Regular performance reviews and improvement initiatives
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <span>Dedicated account management and support teams</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
