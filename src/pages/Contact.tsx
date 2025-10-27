import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import contacHero from "../assets/linkage-hero.png";
const Contact = () => {
  const backgroundImageURL = contacHero;
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
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              Ready to transform your business? Get in touch with our team of
              experts today.
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
