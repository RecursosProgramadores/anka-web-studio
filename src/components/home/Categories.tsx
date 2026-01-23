import { Link } from "react-router-dom";
import { Sparkles, Medal, Palette, Trash2 } from "lucide-react";

const categories = [
  {
    name: "Limpieza",
    description: "Accesorios de limpieza para el hogar y negocios",
    icon: Trash2,
    color: "bg-blue-500",
    slug: "limpieza",
  },
  {
    name: "Manualidades",
    description: "Materiales creativos para proyectos artísticos",
    icon: Palette,
    color: "bg-pink-500",
    slug: "manualidades",
  },
  {
    name: "Deportes",
    description: "Ula ula, sogas y accesorios deportivos",
    icon: Medal,
    color: "bg-green-500",
    slug: "deportes",
  },
  {
    name: "Olimpiadas",
    description: "Pompones y artículos para eventos escolares",
    icon: Sparkles,
    color: "bg-orange-500",
    slug: "olimpiadas",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestras Categorías
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra variedad de productos importados y nacionales 
            disponibles al por mayor y menor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              to={`/productos?categoria=${category.slug}`}
              className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {category.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
