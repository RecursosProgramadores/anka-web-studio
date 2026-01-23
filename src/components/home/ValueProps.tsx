import { Leaf, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { motion } from "framer-motion";

const values = [
  {
    icon: TrendingUp,
    title: "Crecimiento Continuo",
    description: "Seguimos creciendo contigo, adaptándonos a tus necesidades comerciales.",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description: "Comprometidos con un futuro más sostenible y responsable.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad Garantizada",
    description: "Productos de buena calidad que satisfacen las expectativas de nuestros clientes.",
  },
  {
    icon: Users,
    title: "Orientado al Comercio",
    description: "Atendemos a comerciantes de todo el Perú con productos al por mayor y menor.",
  },
];

const ValueProps = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Por qué elegir ANKA?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nuestra visión es construir un futuro más sostenible ofreciendo 
            productos de calidad a comerciantes de todo el Perú.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.12}>
          {values.map((value, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ValueProps;
