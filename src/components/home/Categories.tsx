import { Link } from "react-router-dom";
import { Sparkles, Medal, Palette, Trash2, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const categories = [
  {
    name: "Limpieza",
    description: "Equipamiento profesional para mantenimiento de alto nivel.",
    icon: Trash2,
    color: "bg-blue-600",
    slug: "limpieza",
  },
  {
    name: "Manualidades",
    description: "Materiales creativos para potenciar el talento artístico.",
    icon: Palette,
    color: "bg-pink-600",
    slug: "manualidades",
  },
  {
    name: "Deportes",
    description: "Accesorios deportivos diseñados para el alto rendimiento.",
    icon: Medal,
    color: "bg-emerald-600",
    slug: "deportes",
  },
  {
    name: "Olimpiadas",
    description: "La mejor selección para eventos e institucionales.",
    icon: Sparkles,
    color: "bg-amber-600",
    slug: "olimpiadas",
  },
];

const Categories = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <FadeIn className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Nuestras Líneas</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none italic">
              Categorías de <br />
              <span className="text-primary not-italic">Excelencia</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground font-medium max-w-sm border-l-2 border-border pl-6 leading-relaxed">
              Explora nuestra curaduría maestra de productos nacionales e importados, seleccionados bajo los más altos estándares globales.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
          {categories.map((category) => (
            <StaggerItem key={category.slug}>
              <Link
                to={`/productos?categoria=${category.slug}`}
                className="group relative bg-muted/20 rounded-[2.5rem] p-10 border border-border/50 hover:bg-zinc-900 transition-all duration-700 overflow-hidden block h-full shadow-inner hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-4"
              >
                {/* Decorative Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-black/10 transition-transform duration-700 group-hover:rotate-[15deg] group-hover:scale-110`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:text-white transition-colors italic">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-10 group-hover:text-zinc-400 transition-colors">
                    {category.description}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group-hover:translate-x-3 transition-transform duration-500">
                    <span>Explorar Ahora</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Categories;
