import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

// ✅ Import all media directly from src/assets
import impactBg from "../assets/linkage-hero.png";
import trainingImage from "../assets/linkage-client.jpg";
import trainingVideo from "../assets/outsourcing-promo.mp4"; // <-- make sure this file exists
import worldBankLetter from "../assets/world-bank-letter.pdf";
import serviceReport from "../assets/service-delivery-report.pdf";

const Impact = () => {
  const backgroundImageURL = impactBg;

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
        <div className="container text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Our Impact & Recognition</h1>
          <p className="text-xl opacity-90">
            Celebrating our journey of excellence, trust, and partnerships that
            have transformed organizations across the region.
          </p>
        </div>
      </section>

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

      {/* Media Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle
            title="Our Work in Action"
            subtitle="Snapshots and videos from our training and consultancy programs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Training Image */}
            <img
              src={trainingImage}
              alt="Training Session"
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />

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

      <Footer />
    </div>
  );
};

export default Impact;
