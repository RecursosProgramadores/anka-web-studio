import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/ui/motion";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para comenzar?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-lg opacity-90 mb-8">
              Contáctanos hoy y descubre cómo podemos ayudarte a hacer crecer tu negocio 
              con nuestros productos de calidad.
            </p>
          </FadeIn>
          
          <ScaleIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contacto" className="gap-2">
                  Enviar Mensaje
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="tel:989544896" className="gap-2">
                  <Phone className="w-4 h-4" />
                  Llamar Ahora
                </a>
              </Button>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
