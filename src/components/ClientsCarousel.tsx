import { useState, useEffect } from "react";

const ClientsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    { name: "Airtel Rwanda", logo: "Airtel" },
    { name: "KCB Bank", logo: "KCB" },
    { name: "GT Bank Kigali", logo: "GT Bank" },
    { name: "Bank of Kigali", logo: "BK" },
    { name: "Sonarwa", logo: "Sonarwa" },
    { name: "Britam", logo: "Britam" },
    { name: "UAP Insurance", logo: "UAP" },
    { name: "Oiko Credit", logo: "Oiko" },
    { name: "Horizon Group", logo: "Horizon" },
    { name: "Akagera Business Group", logo: "ABG" },
    { name: "Mjengo", logo: "Mjengo" },
    { name: "Private Sector Federation", logo: "PSF" },
    { name: "Business Partners International", logo: "BPI" },
    { name: "World Bank", logo: "WB" },
    { name: "Chemi Cotex", logo: "Chemi" },
    { name: "UNDP", logo: "UNDP" },
    { name: "BBOXX International", logo: "BBOXX" },
    { name: "Techno Serve", logo: "TechnoServe" },
    { name: "Girlhub", logo: "Girlhub" },
    { name: "Nike Foundation", logo: "Nike" },
    { name: "Diamond Industries", logo: "Diamond" },
    { name: "Cargill", logo: "Cargill" },
    { name: "Redplum", logo: "Redplum" },
    { name: "Chai Trading Ltd", logo: "Chai" },
    { name: "Pwani Oil", logo: "Pwani" },
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
                className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 px-4"
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="p-6 flex flex-col items-center justify-center h-40">
                    {/* Logo area */}
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-primary font-bold text-xl">
                        {client.logo.substring(0, 2)}
                      </span>
                    </div>

                    {/* Client name */}
                    <p className="text-sm font-semibold text-gray-800 text-center">
                      {client.name}
                    </p>
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
                index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Client Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <p className="text-muted-foreground">Organizations Managed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">3,000+</div>
            <p className="text-muted-foreground">Staff Development</p>
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
