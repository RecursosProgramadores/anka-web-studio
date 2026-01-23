import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  priceFilter: "all" | "retail" | "wholesale";
  onPriceFilterChange: (filter: "all" | "retail" | "wholesale") => void;
}

const ProductFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceFilter,
  onPriceFilterChange,
}: ProductFiltersProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-semibold text-foreground mb-3">Categorías</h3>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedCategory === null ? "default" : "secondary"}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onCategoryChange(null)}
          >
            Todos
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "secondary"}
              className="cursor-pointer hover:opacity-80 transition-opacity capitalize"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Price Type Filter */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Tipo de Venta</h3>
        <div className="flex flex-col gap-2">
          <Button
            variant={priceFilter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => onPriceFilterChange("all")}
            className="justify-start"
          >
            Ver Todos
          </Button>
          <Button
            variant={priceFilter === "retail" ? "default" : "outline"}
            size="sm"
            onClick={() => onPriceFilterChange("retail")}
            className="justify-start"
          >
            Precio al Menor
          </Button>
          <Button
            variant={priceFilter === "wholesale" ? "default" : "outline"}
            size="sm"
            onClick={() => onPriceFilterChange("wholesale")}
            className="justify-start"
          >
            Precio al Mayor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
