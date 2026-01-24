import { Leaf, ShieldCheck, TrendingUp, Users, Globe2, Zap } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const values = [
  {
    icon: TrendingUp,
    title: "Visión Global",
    description: "Conectamos tendencias internacionales con el mercado local para potenciar tu éxito.",
    borderColor: "hover:border-blue-500/30"
  },
  {
    icon: ShieldCheck,
    title: "Calidad Premium",
    description: "Cada artículo en nuestro catálogo responde a los más altos estándares de durabilidad.",
    borderColor: "hover:border-emerald-500/30"
  },
  {
    icon: Zap,
    title: "Agilidad Logística",
    description: "Sistemas de despacho optimizados para garantizar que tu stock llegue en tiempo récord.",
    borderColor: "hover:border-amber-500/30"
  },
  {
    icon: Globe2,
    title: "Sostenibilidad",
    description: "Comprometidos con procesos responsables que respetan el futuro de nuestra comunidad.",
    borderColor: "hover:border-primary/30"
  },
];

const ValueProps = () => {
  return (
    <section className="py-32 bg-neutral-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">Propuesta de Valor</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
              ¿Por qué elegir <span className="text-primary not-italic">ANKA Commercial</span>?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
              No solo proveemos productos; ofrecemos una alianza estratégica diseñada para escalar tu modelo de negocio a la excelencia corporativa.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-10" staggerDelay={0.12}>
          {values.map((value, index) => (
            <StaggerItem key={index}>
              <div className={`bg-white rounded-[3rem] p-12 border border-border/50 shadow-xl shadow-black/[0.03] hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 group h-full border-t-4 border-t-transparent ${value.borderColor}`}>
                <div className="w-16 h-16 bg-muted/30 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                  <value.icon className="w-8 h-8 transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ValueProps;
