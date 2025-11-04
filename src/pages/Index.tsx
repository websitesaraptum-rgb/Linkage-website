import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ServicesList from "@/components/ServicesList";
import ClientsCarousel from "@/components/ClientsCarousel";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

import worldBankLetter from "../assets/world-bank-letter.pdf";
import serviceReport from "../assets/service-delivery-report.pdf";
import SectionTitle from "@/components/SectionTitle";

import trainingVideo from "../assets/outsourcing-promo.mp4"; // <-- make sure this file exists
import { Helmet } from "react-helmet-async";
<Helmet>
  <title>Linkage Outsourcing | HR & Recruitment</title>
  <meta
    name="description"
    content="Linkage Outsourcing provides HR outsourcing, recruitment, and staffing services across Kenya and East Africa."
  />
  <meta
    property="og:image"
    content="https://linkageoutsourcing.com/Linkage-logo.png"
  />
</Helmet>;
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection ctaText="Work With Us" ctaLink="/contact" />

      <AboutPreview isPreview={true} />

      {/* Services Overview */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">Our Core Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive business solutions designed to drive growth and
              operational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-card p-8 rounded-lg card-shadow hover:shadow-hover transition-smooth text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Business Process Outsourcing
              </h3>
              <p className="text-muted-foreground mb-6">
                Complete BPO solutions including warehouse management, staffing,
                payroll, and compliance services.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Warehouse & Logistics Management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Staff Management & Recruitment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Payroll & Statutory Compliance
                </li>
              </ul>
              <a
                href="/services"
                className="text-primary font-semibold hover:text-primary/80 transition-smooth"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-card p-8 rounded-lg card-shadow hover:shadow-hover transition-smooth text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Organizational Development
              </h3>
              <p className="text-muted-foreground mb-6">
                Strategic consulting and training programs to enhance
                organizational performance and leadership.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Leadership Training Programs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  HR Strategy & Support
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Team Building & Development
                </li>
              </ul>
              <a
                href="/services"
                className="text-primary font-semibold hover:text-primary/80 transition-smooth"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      <ClientsCarousel />

      {/* Recognition Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionTitle
            title="Letters of Appreciation"
            subtitle="Recognizing our contribution and professional excellence"
          />

          {/* World Bank Letter */}
          <div className="bg-white p-6 rounded-lg card-shadow mb-8">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Letter of Appreciation – World Bank
            </h3>
            <p className="text-gray-700 mb-3">
              Linkage Outsourcing Services provided training to the World Bank
              Regional IT team in Kigali, Rwanda, focusing on{" "}
              <strong>Critical Thinking</strong> and{" "}
              <strong>Problem-Solving Skills</strong>.
            </p>
            <p className="text-gray-600 italic">
              “We have since seen greater collaboration and enhanced teamwork
              among our team members.” – World Bank, 2010
            </p>
            <a
              href={worldBankLetter}
              target="_blank"
              className="text-primary font-medium underline mt-3 inline-block"
            >
              View Full Letter
            </a>
          </div>

          {/* Service Delivery Report */}
          <div className="bg-white p-6 rounded-lg card-shadow mb-8">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Client Testimonials & Success Stories
            </h3>
            <p className="text-gray-700 mb-3">
              Read what our clients, including Girl Hub Rwanda, Commonwealth
              Finance Solutions, and the UNDP, have to say about the quality and
              professionalism of our recruitment, HR, and team building
              services.
            </p>
            <a
              href={serviceReport}
              target="_blank"
              className="text-primary font-medium underline mt-3 inline-block"
            >
              View Testimonial
            </a>
          </div>
        </div>
      </section>

      {/* Training Video Section */}
      {/* Media Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle
            title="Our Work in Action"
            subtitle="Snapshots and videos from our training and consultancy programs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Training Video */}
            <video
              controls
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            >
              <source src={trainingVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join leading organizations across East Africa who trust Linkage
              Outsourcing Services for their business transformation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-smooth"
              >
                Get Started Today
                <ArrowRight size={20} />
              </a>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-smooth border border-white/20"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
