import Layout from "@/components/layout/Layout";
import { Calendar, Target, Leaf, TrendingUp, ShieldCheck, Users } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, SlideIn } from "@/components/ui/motion";

const Nosotros = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Conoce nuestra historia, visión y los valores que nos impulsan a crecer contigo.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SlideIn direction="left">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Nuestra Historia</h2>
              </div>
            </SlideIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <strong className="text-foreground">NEGOCIACIONES ANKA E.I.R.L.</strong> inició 
                  sus actividades comerciales el <strong className="text-primary">25 de agosto del año 2025</strong>, 
                  con una misión clara: ofrecer productos importados y nacionales de calidad 
                  tanto al por mayor como al menor.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Desde nuestros inicios, hemos trabajado con dedicación para convertirnos en 
                  un aliado comercial confiable para comerciantes de todo el Perú. Creemos 
                  firmemente que <em>"El secreto para salir adelante es comenzar"</em>, y cada 
                  día damos pasos firmes hacia un futuro más próspero.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SlideIn direction="right">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Nuestra Visión</h2>
              </div>
            </SlideIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nuestra visión como empresa es <strong className="text-foreground">seguir creciendo contigo</strong>, 
                  brindándote lo que tú necesitas y hacerlo de manera sostenible. Nos comprometemos a 
                  construir un <strong className="text-primary">futuro más sostenible</strong> y ofrecer
                  <strong className="text-primary"> productos de buena calidad</strong> que satisfagan 
                  las expectativas de nuestros clientes.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestros Valores
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión y acción en ANKA.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <StaggerItem>
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center h-full">
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Sostenibilidad</h3>
                <p className="text-muted-foreground text-sm">
                  Comprometidos con prácticas responsables y un futuro más verde.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center h-full">
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Calidad</h3>
                <p className="text-muted-foreground text-sm">
                  Productos que cumplen con los más altos estándares.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center h-full">
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Crecimiento</h3>
                <p className="text-muted-foreground text-sm">
                  Evolucionamos constantemente para servirte mejor.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center h-full">
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Comunidad</h3>
                <p className="text-muted-foreground text-sm">
                  Apoyamos a comerciantes de todo el Perú.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <h2 className="text-3xl font-bold mb-6">Información Legal</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary-foreground/10 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Razón Social</h3>
                  <p className="opacity-90">NEGOCIACIONES ANKA E.I.R.L.</p>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">RUC</h3>
                  <p className="opacity-90">20614688549</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Nosotros;
