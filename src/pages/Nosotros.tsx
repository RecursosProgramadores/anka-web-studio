import Layout from "@/components/layout/Layout";
import { Calendar, Target, Leaf, TrendingUp, ShieldCheck, Users, Briefcase, Award, Zap } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, SlideIn } from "@/components/ui/motion";
import bgImage from "@/assets/slider2.jpg";

const Nosotros = () => {
  const values = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sostenibilidad",
      description: "Comprometidos con prácticas responsables para un futuro más verde y ético."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Calidad Certificada",
      description: "Cada producto en nuestro catálogo pasa por un riguroso proceso de selección."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Innovación",
      description: "Evolucionamos constantemente para ofrecerte las últimas tendencias del mercado global."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comunidad",
      description: "Impulsamos el crecimiento de miles de emprendedores y familias en todo el Perú."
    }
  ];

  const stats = [
    { label: "Clientes Satisfechos", value: "5k+", icon: <Users className="w-5 h-5" /> },
    { label: "Años de Experiencia", value: "2+", icon: <Briefcase className="w-5 h-5" /> },
    { label: "Premios Calidad", value: "10+", icon: <Award className="w-5 h-5" /> },
    { label: "Envíos Diarios", value: "200+", icon: <Zap className="w-5 h-5" /> }
  ];

  return (
    <Layout>
      <main className="overflow-hidden">
        {/* Immersive Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-[#0a0a0a]">
          <div className="absolute inset-0 z-0">
            <img
              src={bgImage}
              alt="Logística ANKA"
              className="w-full h-full object-cover scale-110 blur-[1px] opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-black/20" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <FadeIn>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic mb-4 block">Legado y Excelencia</span>
                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase italic">
                  Nuestra <span className="text-primary not-italic">Esencia</span>
                </h1>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Narrative Section - Our History */}
        <section className="py-24 bg-background relative">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <SlideIn direction="left">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Desde 2025</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
                    Forjando un <span className="text-primary italic">Aliado de Confianza</span>
                  </h2>
                  <div className="space-y-6 text-muted-foreground font-medium leading-relaxed">
                    <p>
                      <strong className="text-foreground">NEGOCIACIONES ANKA E.I.R.L.</strong> no es solo una empresa; es el resultado de una visión audaz nacida en Lima. Iniciamos nuestro camino el <span className="text-primary font-bold">25 de agosto de 2025</span> con el firme propósito de democratizar el acceso a productos de alta calidad.
                    </p>
                    <p>
                      Entendemos que el comercio es el motor de las familias peruanas. Por eso, nos especializamos en ser el puente entre las mejores importaciones y tu negocio, garantizando precios competitivos tanto al por mayor como al por menor.
                    </p>
                    <div className="pt-4 italic border-l-4 border-primary pl-6 font-bold text-foreground text-lg">
                      "El secreto para salir adelante es comenzar."
                    </div>
                  </div>
                </div>
              </SlideIn>

              <SlideIn direction="right" delay={0.2}>
                <div className="relative group p-4">
                  <div className="absolute inset-0 bg-primary/10 rounded-[3rem] blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                    <img
                      src={bgImage}
                      alt="Nuestra Historia"
                      className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Experience Badge */}
                  <div className="absolute -bottom-8 -left-8 bg-primary p-8 rounded-3xl shadow-2xl text-primary-foreground animate-bounce-slow">
                    <p className="text-4xl font-black italic tracking-tighter leading-none">25</p>
                    <p className="text-[10px] font-black uppercase tracking-widest mt-1">Agosto</p>
                    <p className="text-[9px] opacity-80 uppercase font-bold">Fundación</p>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 bg-muted/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[100px] rounded-full translate-x-1/2" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <SlideIn direction="left" className="lg:col-span-5 order-2 lg:order-1">
                  <div className="relative">
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50">
                      <img
                        src={bgImage}
                        alt="Nuestra Visión"
                        className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>
                </SlideIn>

                <SlideIn direction="right" className="lg:col-span-7 order-1 lg:order-2">
                  <div className="space-y-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Nuestra <span className="text-primary italic">Visión 2030</span></h2>
                    <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                      Nuestra mirada está puesta en el horizonte de un <strong className="text-foreground">Perú más próspero y sostenible</strong>. En ANKA, aspiramos a ser líderes en la cadena de suministros nacional, no solo por volumen, sino por la integridad y calidad con la que tratamos cada pedido.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-6">
                      <div className="space-y-2">
                        <p className="text-sm font-black uppercase tracking-wider text-foreground">Innovación</p>
                        <p className="text-xs text-muted-foreground">Adopción de nuevas tecnologías para optimizar tus compras.</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-black uppercase tracking-wider text-foreground">Escalabilidad</p>
                        <p className="text-xs text-muted-foreground">Capacidad logística para acompañar tu crecimiento.</p>
                      </div>
                    </div>
                  </div>
                </SlideIn>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Valores que nos <span className="text-primary italic">Definen</span></h2>
              <p className="text-muted-foreground max-w-xl mx-auto font-medium">Los pilares fundamentales que sostienen cada interacción con nuestros clientes.</p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <StaggerItem key={i}>
                  <div className="p-10 rounded-[2.5rem] bg-muted/10 border border-border/50 hover:bg-primary/5 hover:border-primary/20 hover:-translate-y-3 transition-all duration-500 group h-full">
                    <div className="w-14 h-14 bg-background shadow-xl rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                      {v.icon}
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-tighter mb-4">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">{v.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-primary py-16 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "20px 20px" }} />
          <div className="container mx-auto px-4 relative z-10">
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((s, i) => (
                <StaggerItem key={i} className="flex flex-col items-center text-center text-primary-foreground">
                  <div className="mb-4 opacity-50">{s.icon}</div>
                  <p className="text-4xl md:text-5xl font-black italic tracking-tighter mb-1">{s.value}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">{s.label}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Legal Badge Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="max-w-4xl mx-auto bg-background rounded-[3rem] p-10 md:p-16 border border-border/50 shadow-2xl text-center space-y-10">
                <div className="space-y-4">
                  <h2 className="text-2xl font-black uppercase tracking-widest text-muted-foreground/50">Compromiso Legal</h2>
                  <div className="h-[2px] w-20 bg-primary mx-auto" />
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Razón Social</p>
                    <p className="text-xl font-black tracking-tight uppercase">NEGOCIACIONES ANKA E.I.R.L.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">RUC Oficial</p>
                    <p className="text-xl font-black tracking-tight tabular-nums">20614688549</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Nosotros;
