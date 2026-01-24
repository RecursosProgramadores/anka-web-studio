import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, TrendingUp, ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import bgImage from "@/assets/slider2.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-black">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src={bgImage}
          alt="ANKA Logistics"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/20" />
      </div>

      {/* Decorative Glass Elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-primary/20 blur-[150px] rounded-full translate-x-1/2 opacity-30 z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content Section */}
          <div className="lg:col-span-12 xl:col-span-7 text-white space-y-10">
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.85] tracking-tighter uppercase italic"
              >
                Importa <br />
                <span className="text-primary not-italic">Sin Límites</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg md:text-xl text-zinc-400 font-medium max-w-xl leading-relaxed"
              >
                Somos <span className="text-white font-bold italic">ANKA</span>. Conectamos tu ambición con los mejores mercados nacionales e internacionales. Calidad superior al por mayor y menor.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 items-start sm:items-center"
            >
              <Button size="lg" className="h-16 px-10 rounded-2xl text-lg font-black uppercase tracking-widest shadow-2xl shadow-primary/20 hover:-translate-y-1 transition-all" asChild>
                <Link to="/productos" className="gap-3">
                  Explorar Catálogo
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>

              <button className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <span className="text-sm font-black uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">Conoce Más</span>
              </button>
            </motion.div>

            {/* Floating Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10 max-w-lg"
            >
              {[
                { value: "100%", label: "Garantía", icon: <TrendingUp className="w-3 h-3 text-primary" /> },
                { value: "24/7", label: "Despacho", icon: <Package className="w-3 h-3 text-primary" /> },
                { value: "Nac.", label: "Envíos", icon: <ArrowRight className="w-3 h-3 text-primary" /> },
              ].map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-2">
                    {stat.icon}
                    <span className="text-2xl font-black italic tracking-tighter">{stat.value}</span>
                  </div>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Interactive Showcase Card (Hidden on Tablet/Mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden xl:flex lg:col-span-5 justify-end"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] bg-zinc-900 group">
              <img
                src={bgImage}
                alt="Showcase"
                className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              <div className="absolute bottom-10 left-10 right-10 p-8 bg-black/60 backdrop-blur-xl rounded-[2rem] border border-white/10 space-y-4 shadow-2xl">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Próximamente</p>
                  <h3 className="text-2xl font-black uppercase italic leading-none text-white">Nueva <br />Colección</h3>
                </div>
                <div className="h-[1px] w-full bg-white/20" />
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-zinc-100">Ver Detalles</p>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-white" />
        <span className="text-[9px] font-black uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
