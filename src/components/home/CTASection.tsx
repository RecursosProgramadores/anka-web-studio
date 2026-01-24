import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/ui/motion";
import bgImage from "@/assets/slider2.jpg";

const CTASection = () => {
  return (
    <section className="py-24 px-4 bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="relative rounded-[4rem] overflow-hidden bg-black py-20 px-8 md:px-20 text-center">
          {/* Background with Image and Overlay */}
          <div className="absolute inset-0 z-0 opacity-50">
            <img
              src={bgImage}
              alt="Logística ANKA"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-black/80 to-[#0a0a0a]" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <FadeIn className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Canal Mayorista Abierto</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white uppercase italic tracking-tighter leading-[0.85]">
                Potencia tu <br />
                <span className="text-primary not-italic">Infraestructura</span>
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-medium max-w-2xl mx-auto leading-relaxed">
                ¿Listo para elevar el estándar de tu inventario? Conéctate con nuestros asesores comerciales hoy mismo.
              </p>
            </FadeIn>

            <ScaleIn delay={0.2} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="h-16 px-12 rounded-2xl text-lg font-black uppercase tracking-widest shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all w-full sm:w-auto" asChild>
                <Link to="/contacto" className="gap-3">
                  Enviar Mensaje
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="h-16 px-12 rounded-2xl text-lg font-black uppercase tracking-widest bg-zinc-900 border border-white/10 text-white hover:bg-zinc-800 transition-all w-full sm:w-auto shadow-2xl shadow-black/40"
                asChild
              >
                <a href="tel:989544896" className="gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  Llamar Ahora
                </a>
              </Button>
            </ScaleIn>

            <FadeIn delay={0.4}>
              <div className="pt-10 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-50">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Seguridad ANKA</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Importaciones Directas</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Calidad Exportación</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
