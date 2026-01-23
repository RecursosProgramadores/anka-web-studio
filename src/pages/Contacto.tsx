import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const Contacto = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              ¿Tienes alguna pregunta o deseas hacer un pedido? 
              Estamos aquí para ayudarte.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <SlideIn direction="left">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Envíanos un Mensaje
                </h2>
                <ContactForm />
              </div>
            </SlideIn>

            {/* Contact Info */}
            <SlideIn direction="right" delay={0.2}>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Información de Contacto
                </h2>
                
                <StaggerContainer className="space-y-6" staggerDelay={0.1}>
                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                        <a 
                          href="tel:989544896" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          989 544 896
                        </a>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <div className="space-y-1">
                          <a 
                            href="mailto:negociacionesanka25@gmail.com" 
                            className="text-muted-foreground hover:text-primary transition-colors block"
                          >
                            negociacionesanka25@gmail.com
                          </a>
                          <a 
                            href="mailto:ricardo_1991_26@hotmail.com" 
                            className="text-muted-foreground hover:text-primary transition-colors block"
                          >
                            ricardo_1991_26@hotmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                        <p className="text-muted-foreground">
                          Jr. Cusco Nro 744 int 208<br />
                          Galería Mina de Oro II<br />
                          Lima - Lima - Lima, Perú
                        </p>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Horario de Atención</h3>
                        <p className="text-muted-foreground">
                          Lunes a Sábado: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerContainer>

                {/* Social Media */}
                <FadeIn delay={0.4}>
                  <div className="mt-8 pt-8 border-t border-border">
                    <h3 className="font-semibold text-foreground mb-4">Síguenos</h3>
                    <div className="flex gap-3">
                      <a
                        href="https://facebook.com/ANKA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                      >
                        <Facebook className="w-4 h-4" />
                        <span className="text-sm">ANKA</span>
                      </a>
                      <a
                        href="https://facebook.com/somos_anka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                      >
                        <Facebook className="w-4 h-4" />
                        <span className="text-sm">Somos ANKA</span>
                      </a>
                      <a
                        href="https://tiktok.com/@anka22_store"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                        <span className="text-sm">TikTok</span>
                      </a>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Nuestra Ubicación
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="rounded-xl overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8746893693895!2d-77.0287!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5d35662c7%3A0x15f0bda5ccbd31eb!2sJr.%20Cusco%2C%20Lima%2C%20Peru!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación ANKA"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
