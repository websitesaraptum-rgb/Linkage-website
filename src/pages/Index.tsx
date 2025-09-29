import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutPreview from '@/components/AboutPreview';
import ServicesList from '@/components/ServicesList';
import ClientsCarousel from '@/components/ClientsCarousel';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <HeroSection
        title="Your Partner in Business Excellence"
        subtitle="Leading Business Process Outsourcing & Organizational Development"
        description="Transform your organization with our comprehensive BPO services, strategic consulting, and professional development solutions across East Africa."
        ctaText="Work With Us"
        ctaLink="/contact"
      />

      <AboutPreview isPreview={true} />

      {/* Services Overview */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">Our Core Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive business solutions designed to drive growth and operational excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-card p-8 rounded-lg card-shadow hover:shadow-hover transition-smooth text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">Business Process Outsourcing</h3>
              <p className="text-muted-foreground mb-6">
                Complete BPO solutions including warehouse management, staffing, payroll, and compliance services.
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
              <a href="/services" className="text-primary font-semibold hover:text-primary/80 transition-smooth">
                Learn More →
              </a>
            </div>

            <div className="bg-card p-8 rounded-lg card-shadow hover:shadow-hover transition-smooth text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">Organizational Development</h3>
              <p className="text-muted-foreground mb-6">
                Strategic consulting and training programs to enhance organizational performance and leadership.
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
              <a href="/services" className="text-primary font-semibold hover:text-primary/80 transition-smooth">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      <ClientsCarousel />

      {/* Call to Action */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join leading organizations across East Africa who trust ConsultPro for their business transformation needs.
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