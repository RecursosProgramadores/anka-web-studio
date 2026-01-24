import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import ProductFilters from "@/components/products/ProductFilters";
import { useProducts } from "@/hooks/useProducts";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { FadeIn, SlideIn } from "@/components/ui/motion";
import { motion, AnimatePresence } from "framer-motion";

const Productos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, categories, isLoading, error } = useProducts();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get("categoria")
  );
  const [priceFilter, setPriceFilter] = useState<"all" | "retail" | "wholesale">("all");

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    if (category) {
      setSearchParams({ categoria: category });
    } else {
      setSearchParams({});
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        !selectedCategory || product.category === selectedCategory;

      const matchesPrice =
        priceFilter === "all" ||
        (priceFilter === "retail" && product.price > 0) ||
        (priceFilter === "wholesale" && product.wholesalePrice !== undefined);

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [products, searchQuery, selectedCategory, priceFilter]);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Productos</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Explora nuestra variedad de productos importados y nacionales
              disponibles al por mayor y menor.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:col-span-1">
              <SlideIn direction="left">
                <div className="sticky top-24">
                  {/* Search */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Buscar productos..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <ProductFilters
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                    priceFilter={priceFilter}
                    onPriceFilterChange={setPriceFilter}
                  />
                </div>
              </SlideIn>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {isLoading ? (
                <FadeIn>
                  <div className="flex items-center justify-center py-20">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    <span className="ml-2 text-muted-foreground">Cargando productos...</span>
                  </div>
                </FadeIn>
              ) : error ? (
                <FadeIn>
                  <div className="text-center py-20">
                    <p className="text-destructive">{error}</p>
                  </div>
                </FadeIn>
              ) : filteredProducts.length === 0 ? (
                <FadeIn>
                  <div className="text-center py-20">
                    <p className="text-muted-foreground">
                      No se encontraron productos que coincidan con tu búsqueda.
                    </p>
                  </div>
                </FadeIn>
              ) : (
                <>
                  <FadeIn>
                    <div className="flex items-center justify-between mb-6">
                      <p className="text-muted-foreground">
                        Mostrando {filteredProducts.length} producto(s)
                      </p>
                    </div>
                  </FadeIn>

                  <motion.div
                    layout
                    className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
                  >
                    <AnimatePresence mode="popLayout">
                      {filteredProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* API Integration Note */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <div className="max-w-2xl mx-auto bg-accent/50 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">
                💡 Integración con API
              </h3>
              <p className="text-muted-foreground text-sm">
                Los productos se cargan dinámicamente. Para agregar nuevos productos,
                utiliza el panel de administración que se conecta con nuestra API.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Productos;
