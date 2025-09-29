import Navbar from '@/components/Navbar';
import ClientsCarousel from '@/components/ClientsCarousel';
import SectionTitle from '@/components/SectionTitle';
import Footer from '@/components/Footer';

const Clients = () => {
  const clientCategories = [
    {
      title: "Banking & Financial Services",
      clients: [
        { name: "KCB Bank", description: "Leading commercial bank in East Africa" },
        { name: "GT Bank", description: "International banking group" },
        { name: "Bank of Kigali", description: "Rwanda's largest commercial bank" },
        { name: "First Community Bank", description: "Community-focused financial institution" },
        { name: "EADB Bank", description: "East African Development Bank" },
        { name: "Post Office Savings Bank", description: "Government savings institution" }
      ]
    },
    {
      title: "Telecommunications",
      clients: [
        { name: "Airtel", description: "Leading telecommunications provider" }
      ]
    },
    {
      title: "Insurance & Financial Services",
      clients: [
        { name: "Britam", description: "Leading insurance and financial services group" }
      ]
    },
    {
      title: "International Development",
      clients: [
        { name: "UNDP", description: "United Nations Development Programme" },
        { name: "World Bank", description: "International financial institution" },
        { name: "Uganda Gatsby Trust", description: "Skills development organization" }
      ]
    },
    {
      title: "Manufacturing & FMCG",
      clients: [
        { name: "Unilever ESA", description: "Multinational consumer goods company" }
      ]
    }
  ];

  const testimonials = [
    {
      quote: "ConsultPro transformed our organizational structure and helped us achieve remarkable efficiency gains. Their expertise in payroll management and staff training has been invaluable.",
      client: "First Community Bank",
      position: "HR Director"
    },
    {
      quote: "The multi-country job evaluation project was executed flawlessly. ConsultPro's regional expertise and systematic approach delivered results beyond our expectations.",
      client: "Unilever ESA",
      position: "Regional HR Manager"
    },
    {
      quote: "Their performance management system implementation has revolutionized how we track and improve employee performance. The results speak for themselves.",
      client: "Uganda Gatsby Trust",
      position: "Operations Manager"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Clients</h1>
            <p className="text-xl opacity-90">
              Trusted by leading organizations across East Africa and beyond
            </p>
          </div>
        </div>
      </section>

      <ClientsCarousel />

      {/* Client Categories */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            title="Client Portfolio"
            subtitle="We serve diverse industries with specialized expertise"
          />

          <div className="space-y-12">
            {clientCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.clients.map((client, clientIndex) => (
                    <div key={clientIndex} className="bg-card p-6 rounded-lg card-shadow hover:shadow-hover transition-smooth">
                      <h4 className="text-lg font-semibold text-primary mb-2">{client.name}</h4>
                      <p className="text-muted-foreground text-sm">{client.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionTitle
            title="Client Testimonials"
            subtitle="What our clients say about working with us"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg card-shadow">
                <div className="mb-4">
                  <div className="text-4xl text-secondary mb-2">"</div>
                  <p className="text-muted-foreground italic">{testimonial.quote}</p>
                </div>
                <div className="border-t pt-4">
                  <p className="font-semibold text-primary">{testimonial.client}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            title="Why Organizations Choose Us"
            subtitle="The benefits of partnering with ConsultPro"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Results-Driven</h3>
              <p className="text-sm text-muted-foreground">Measurable outcomes and tangible business impact</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-semibold mb-2">Regional Expertise</h3>
              <p className="text-sm text-muted-foreground">Deep understanding of East African business environment</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">Agile Delivery</h3>
              <p className="text-sm text-muted-foreground">Flexible and responsive project execution</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold mb-2">Long-term Partnership</h3>
              <p className="text-sm text-muted-foreground">Committed to your sustained success</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;