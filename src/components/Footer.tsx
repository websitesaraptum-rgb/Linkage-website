import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-secondary">ConsultPro</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading business processing outsourcing and organizational development consultancy 
              serving clients across East Africa and beyond.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-secondary" />
                <span>info@consultpro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-secondary" />
                <span>+250 788 123 456</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/services" className="hover:text-secondary transition-smooth">BPO Services</a></li>
              <li><a href="/services" className="hover:text-secondary transition-smooth">HR Consultancy</a></li>
              <li><a href="/services" className="hover:text-secondary transition-smooth">Training Programs</a></li>
              <li><a href="/services" className="hover:text-secondary transition-smooth">Payroll Management</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-secondary transition-smooth">About Us</a></li>
              <li><a href="/projects" className="hover:text-secondary transition-smooth">Case Studies</a></li>
              <li><a href="/clients" className="hover:text-secondary transition-smooth">Our Clients</a></li>
              <li><a href="/contact" className="hover:text-secondary transition-smooth">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ConsultPro. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} className="text-secondary" />
                <span className="text-sm">Rwanda • Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;