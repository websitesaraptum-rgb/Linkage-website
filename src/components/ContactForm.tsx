import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-primary mb-6">Get In Touch</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to transform your business? Contact us today to discuss how
              we can help you achieve your organizational goals.
            </p>

            {/* Office Information */}
            <div className="space-y-6">
              {/* Rwanda HQ */}
              <div className="p-6 bg-card rounded-lg card-shadow">
                <h3 className="font-semibold mb-4 text-primary flex items-center gap-2">
                  <MapPin size={20} />
                  Nairobi, Kenya HQ
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>BUILDING: LR NO 209/431 </p>
                  <p>P. Box 0517-1008 Nairobi</p>
                  <p>Starehe district</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Phone size={16} className="text-primary" />
                    <span>+254 705 805 437</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-primary" />
                    <span>admin@linkageoutsourcing.com</span>
                  </div>
                </div>
              </div>

              {/* Kenya Offices */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-card rounded-lg card-shadow">
                  <h4 className="font-semibold mb-3 text-primary">
                    Nairobi Office
                  </h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Box 1008-0517</p>
                    <p>Kigali, Rwanda</p>
                    <div className="flex items-center gap-2 pt-2">
                      <Phone size={14} className="text-primary" />
                      <span>+250 783 073 161</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-card rounded-lg card-shadow">
                  <h4 className="font-semibold mb-3 text-primary">
                    Mombasa Office
                  </h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Nyali office, off Umoja Road</p>
                    <p>Mombasa, Kenya</p>
                    <div className="flex items-center gap-2 pt-2">
                      <Phone size={14} className="text-primary" />
                      <span>+254 705 805 437</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card p-8 rounded-lg card-shadow">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2"
                  >
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-smooth flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
