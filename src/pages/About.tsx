import Navbar from "@/components/Navbar";
import AboutPreview from "@/components/AboutPreview";
import ValuesGrid from "@/components/ValuesGrid";
import Footer from "@/components/Footer";

import { Helmet } from "react-helmet-async";

<Helmet>
  <title>About | Linkage Outsourcing Services</title>
  <meta
    name="description"
    content="Learn more about Linkage Outsourcing’s mission and values."
  />
</Helmet>;

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <AboutPreview isPreview={false} />

      <ValuesGrid />

      {/* Experience & Expertise */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-primary mb-4">Our Expertise</h2>
              <p className="text-muted-foreground text-lg">
                Decades of combined experience across industries and sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg card-shadow">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Industry Experience
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Banking & Financial Services
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Telecommunications
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    International Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Manufacturing & FMCG
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Government & Public Sector
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg card-shadow">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Service Capabilities
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Multi-country project management
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Large-scale organizational restructuring
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Complex payroll & compliance systems
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Executive leadership development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Performance management systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
