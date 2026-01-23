import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-anka-blue-dark min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Desde Agosto 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Productos Importados y Nacionales
              <span className="block text-anka-gold mt-2">Al Por Mayor y Menor</span>
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg leading-relaxed">
              El secreto para salir adelante es comenzar. Somos tu aliado comercial 
              con productos de calidad para tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/productos" className="gap-2">
                  Ver Productos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/contacto">Contáctanos</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20">
              <div>
                <div className="text-3xl font-bold text-anka-gold">4</div>
                <div className="text-sm opacity-80">Categorías</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-anka-gold">100%</div>
                <div className="text-sm opacity-80">Calidad</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-anka-gold">Perú</div>
                <div className="text-sm opacity-80">Nacional</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center items-center animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 bg-primary-foreground/10 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-primary-foreground/20">
                <Package className="w-32 h-32 text-primary-foreground opacity-80" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-anka-gold rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-primary font-bold text-2xl">A</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
