import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Instagram, Facebook } from "lucide-react";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import bgImage from "@/assets/slider2.jpg";

const Contacto = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Línea Directa",
      value: "989 544 896",
      href: "tel:989544896",
      description: "Atención personalizada inmediata."
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Correo Corporativo",
      value: "negociacionesanka25@gmail.com",
      href: "mailto:negociacionesanka25@gmail.com",
      description: "Para consultas y órdenes oficiales."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Sede Principal",
      value: "Jr. Cusco 744, Galería Mina de Oro II",
      description: "Visítanos en el corazón comercial de Lima."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horario Comercial",
      value: "Lun - Sáb: 9am - 6pm",
      description: "Estamos listos para atender tu negocio."
    }
  ];

  return (
    <Layout>
      <main className="overflow-hidden">
        {/* Premium Hero Section with Background Image */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-black">
          {/* Background Image & Overlays */}
          <div className="absolute inset-0 z-0">
            <img
              src={bgImage}
              alt="Logística ANKA"
              className="w-full h-full object-cover scale-105"
            />
            {/* Multiple overlays for depth and legibility */}
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />
          </div>

          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 z-10" />
          <div className="absolute inset-0 opacity-[0.05] z-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-4 backdrop-blur-md">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Canal de Atención ANKA</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase italic drop-shadow-2xl">
                  Hablemos de tu <br />
                  <span className="text-primary not-italic">Próximo Éxito</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-base md:text-xl text-zinc-200 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                  ¿Buscas importar a gran escala o potenciar tu stock local? Nuestro equipo de expertos está listo para brindarte la mejor asesoría del mercado.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contact Cards Grid */}
        <section className="relative z-30 -mt-16 md:-mt-24 pb-20">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, idx) => (
                <StaggerItem key={idx}>
                  <div className="h-full bg-background border border-border/50 p-8 rounded-[2rem] shadow-2xl shadow-black/5 hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 group">
                    <div className="w-14 h-14 bg-muted/50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                      {info.icon}
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">{info.title}</h3>
                    {info.href ? (
                      <a href={info.href} className="text-lg font-bold text-foreground hover:text-primary transition-colors block mb-2 break-words">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-bold text-foreground mb-2">{info.value}</p>
                    )}
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                      {info.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Form & Social Media */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              {/* Left: Branding & Message */}
              <div className="lg:col-span-12 xl:col-span-5 space-y-12">
                <SlideIn direction="left">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">
                      Transformamos <br />
                      <span className="text-primary italic">tus Ambiciones</span>
                    </h2>
                    <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-md">
                      Completa el formulario y uno de nuestros asesores comerciales se pondrá en contacto contigo en menos de 24 horas hábiles.
                    </p>
                  </div>

                  <div className="space-y-8 pt-10">
                    <div className="flex items-center gap-6">
                      <div className="h-[1px] w-12 bg-border" />
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">Síguenos en las Redes</span>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <a href="https://facebook.com/ANKA" className="flex items-center gap-3 px-6 py-3 bg-muted rounded-full text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-all">
                        <Facebook className="w-4 h-4" /> Facebook
                      </a>
                      <a href="https://tiktok.com/@anka22_store" className="flex items-center gap-3 px-6 py-3 bg-muted rounded-full text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-all">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg> TikTok
                      </a>
                      <a href="#" className="flex items-center gap-3 px-6 py-3 bg-muted rounded-full text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-all">
                        <Instagram className="w-4 h-4" /> Instagram
                      </a>
                    </div>
                  </div>
                </SlideIn>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-12 xl:col-span-7">
                <SlideIn direction="right">
                  <div className="bg-muted/10 border border-border p-8 md:p-12 rounded-[2.5rem] shadow-inner relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.02]">
                      <Send className="w-40 h-40 -rotate-12" />
                    </div>
                    <ContactForm />
                  </div>
                </SlideIn>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width Map Section */}
        <section className="relative h-[500px] w-full mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8746893693895!2d-77.0287!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5d35662c7%3A0x15f0bda5ccbd31eb!2sJr.%20Cusco%2C%20Lima%2C%20Peru!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            className="absolute inset-0 w-full h-full grayscale-[0.8] contrast-[1.2] invert-[0.1]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación ANKA"
          />
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />

          {/* Floating Map Label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-6 rounded-3xl shadow-2xl border border-border max-w-[280px] pointer-events-auto">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">Sede Central</span>
            </div>
            <p className="text-sm font-bold leading-tight">Mina de Oro II, Jr. Cusco 744 - Lima</p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Contacto;
