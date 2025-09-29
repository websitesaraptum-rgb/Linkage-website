import { ArrowRight, Target, Eye, Heart } from 'lucide-react';

interface AboutPreviewProps {
  isPreview?: boolean;
}

const AboutPreview = ({ isPreview = false }: AboutPreviewProps) => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {isPreview ? (
            <>
              <div className="text-center mb-8">
                <h2 className="text-primary mb-4">About Linkage Outsourcing Services</h2>
                <p className="text-lg text-muted-foreground">
                  Your trusted partner in business transformation and organizational excellence
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Vision</h3>
                  <p className="text-sm text-muted-foreground">Leading business solutions across East Africa</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Mission</h3>
                  <p className="text-sm text-muted-foreground">Delivering excellence in consultancy services</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Values</h3>
                  <p className="text-sm text-muted-foreground">Integrity, excellence, and client success</p>
                </div>
              </div>
              <div className="text-center">
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-smooth"
                >
                  Learn More About Us
                  <ArrowRight size={18} />
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-12">
                <h1 className="text-primary mb-6">About Linkage Outsourcing Services</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Linkage Outsourcing Services Ltd (Linkage) is an Outsourcing company with 10 years of experience 
                  in Business Consultancies, organization Improvement and professional outsourcing. Our company has 
                  provided workforce and managed over 200 Local and Multinational Organizations in Kenya, Rwanda, 
                  DR Congo and Burundi since April 2010 and contributed to the performance development of over 3,000 staff.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Our Capacity Statement</h3>
                  <p className="text-muted-foreground mb-4">
                    Whether it is a complete turn-key solution or targeted Recruitment or staff Outsourcing, 
                    you can trust us because we are passionate about our work, and have a proven track record 
                    of managing long-term Staff Outsourcing partnerships.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      10+ years of industry experience
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      200+ organizations managed
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      3,000+ staff performance development
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      Regional presence across 4 countries
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Our Regional Presence</h3>
                  <p className="text-muted-foreground mb-4">
                    Our regional clients include Airtel Rwanda, KCB, GT Bank Kigali, Bank of Kigali, Sonarwa, 
                    Britam, UAP, Oiko Credit, Horizon Group, Akagera Business Group, and many more leading organizations.
                  </p>
                  <p className="text-muted-foreground">
                    In Mombasa, our Director Edgar Ogao has extensive experience providing labour and managing 
                    outsourced staff for Diamond Industries, Cargill, Redplum, Chai Trading Ltd and Pwani Oil.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;