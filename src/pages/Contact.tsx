import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              Ready to transform your business? Get in touch with our team of experts today.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;