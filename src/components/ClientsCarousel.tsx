import { useState, useEffect } from 'react';

const ClientsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    { name: "Airtel", logo: "Airtel" },
    { name: "KCB Bank", logo: "KCB" },
    { name: "GT Bank", logo: "GT Bank" },
    { name: "Bank of Kigali", logo: "BK" },
    { name: "Britam", logo: "Britam" },
    { name: "UNDP", logo: "UNDP" },
    { name: "World Bank", logo: "World Bank" },
    { name: "First Community Bank", logo: "FCB" },
    { name: "EADB Bank", logo: "EADB" },
    { name: "Post Office Savings Bank", logo: "POSB" },
    { name: "Uganda Gatsby Trust", logo: "UGT" },
    { name: "Unilever ESA", logo: "Unilever" }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === clients.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [clients.length]);

  const visibleClients = 6; // Number of clients to show at once
  const getVisibleClients = () => {
    const visible = [];
    for (let i = 0; i < visibleClients; i++) {
      const index = (currentIndex + i) % clients.length;
      visible.push(clients[index]);
    }
    return visible;
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">Our Trusted Clients</h2>
          <p className="text-muted-foreground text-lg">
            We're proud to work with leading organizations across East Africa
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            {getVisibleClients().map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-1/6 px-4"
              >
                <div className="bg-white p-6 rounded-lg card-shadow hover:shadow-hover transition-smooth h-32 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary font-bold text-lg">
                        {client.logo.substring(0, 2)}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">{client.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-smooth ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Client Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-muted-foreground">Satisfied Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;