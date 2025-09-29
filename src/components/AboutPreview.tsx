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
                <h2 className="text-primary mb-4">About ConsultPro</h2>
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
                <h1 className="text-primary mb-6">About ConsultPro</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  With over a decade of experience in business process outsourcing and organizational development, 
                  we are your trusted partner in driving business excellence across East Africa.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Our Capacity</h3>
                  <p className="text-muted-foreground mb-4">
                    ConsultPro specializes in comprehensive business solutions that drive organizational success. 
                    Our expertise spans across multiple industries, serving both private and public sector clients.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      10+ years of industry experience
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      50+ successful projects completed
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      Regional presence in Rwanda and Kenya
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Our Experience</h3>
                  <p className="text-muted-foreground mb-4">
                    Founded with a vision to transform businesses through strategic consulting and process optimization, 
                    we have built a reputation for delivering measurable results and sustainable growth.
                  </p>
                  <p className="text-muted-foreground">
                    Our team of certified professionals brings together diverse expertise in HR management, 
                    organizational development, training, and business process optimization.
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