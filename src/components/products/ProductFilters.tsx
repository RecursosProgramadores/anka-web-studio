import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, CreditCard, ChevronRight, Tag } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { Category } from "@/hooks/useProducts";

interface ProductFiltersProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const ProductFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) => {
  const { totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
    }).format(price);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Mi Pedido Summary */}
      <div className="bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl shadow-primary/20 overflow-hidden relative group">
        <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
          <ShoppingBag className="w-24 h-24" />
        </div>

        <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 opacity-80 flex items-center gap-2">
          <Tag className="w-3 h-3" />
          Mi Pedido
        </h3>

        <div className="space-y-1">
          <p className="text-3xl font-black">{formatPrice(totalPrice)}</p>
          <p className="text-xs font-medium opacity-80">
            {totalItems} productos seleccionado(s)
          </p>
        </div>

        <Separator className="my-4 bg-primary-foreground/20" />

        <Button
          variant="secondary"
          size="sm"
          className="w-full font-black text-xs uppercase tracking-widest h-10 group"
          onClick={() => navigate("/checkout")}
        >
          Confirmar Pedido
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
        {/* Categories */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Categorías
          </h3>
          <div className="flex flex-col gap-1">
            <button
              onClick={() => onCategoryChange(null)}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-bold transition-all ${selectedCategory === null
                ? "bg-primary/10 text-primary border-r-4 border-primary"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
            >
              <span>Todos los productos</span>
              {selectedCategory === null && <ChevronRight className="w-4 h-4" />}
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.nombre)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-bold capitalize transition-all ${selectedCategory === category.nombre
                  ? "bg-primary/10 text-primary border-r-4 border-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
              >
                <span>{category.nombre}</span>
                {selectedCategory === category.nombre && <ChevronRight className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
