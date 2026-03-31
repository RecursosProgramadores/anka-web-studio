import { useState } from "react";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import ProductDetail from "./ProductDetail";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  inStock: boolean;
  variants?: any[];
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [showDetail, setShowDetail] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
    }).format(price);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border group flex flex-col h-full"
      >
        <div 
          className="aspect-square bg-muted/20 relative overflow-hidden cursor-pointer p-4 group"
          onClick={() => setShowDetail(true)}
        >
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-muted/50">
              <ShoppingCart className="w-12 h-12 opacity-50" />
            </div>
          )}
          
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button variant="secondary" size="sm" className="gap-2">
              <Eye className="w-4 h-4" />
              Ver Detalles
            </Button>
          </div>

          <Badge className="absolute top-3 left-3 capitalize z-10">
            {product.category}
          </Badge>
          
          {!product.inStock && (
            <Badge variant="destructive" className="absolute top-3 right-3 z-10">
              Agotado
            </Badge>
          )}
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3 
            className="font-bold text-card-foreground mb-1 line-clamp-1 cursor-pointer hover:text-primary transition-colors"
            onClick={() => setShowDetail(true)}
          >
            {product.name}
          </h3>
          <p className="line-clamp-2 text-muted-foreground text-sm mb-4 flex-1">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mt-auto">
            <span className="text-xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            <Button 
              size="sm" 
              className="gap-2"
              variant={product.inStock ? "default" : "secondary"}
              disabled={!product.inStock}
              onClick={() => setShowDetail(true)}
            >
              <ShoppingCart className="w-4 h-4" />
              Comprar
            </Button>
          </div>
        </div>
      </motion.div>

      <ProductDetail 
        product={product} 
        open={showDetail} 
        onOpenChange={setShowDetail} 
      />
    </>
  );
};

export default ProductCard;
