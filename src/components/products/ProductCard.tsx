import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  wholesalePrice?: number;
  category: string;
  image?: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
    }).format(price);
  };

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border group">
      {/* Image */}
      <div className="aspect-square bg-muted relative overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <ShoppingCart className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <span className="text-sm">Imagen del producto</span>
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        <Badge className="absolute top-3 left-3 capitalize">
          {product.category}
        </Badge>
        
        {/* Stock Badge */}
        {!product.inStock && (
          <Badge variant="destructive" className="absolute top-3 right-3">
            Agotado
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-card-foreground mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Prices */}
        <div className="flex flex-col gap-1 mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-muted-foreground">Menor:</span>
            <span className="text-lg font-bold text-foreground">
              {formatPrice(product.price)}
            </span>
          </div>
          {product.wholesalePrice && (
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-muted-foreground">Mayor:</span>
              <span className="text-md font-semibold text-primary">
                {formatPrice(product.wholesalePrice)}
              </span>
            </div>
          )}
        </div>

        {/* Button */}
        <Button 
          className="w-full gap-2" 
          disabled={!product.inStock}
        >
          <ShoppingCart className="w-4 h-4" />
          Agregar al Carrito
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
