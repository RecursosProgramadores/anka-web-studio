import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Check, Minus, Plus } from "lucide-react";
import { Product } from "./ProductCard";
import { toast } from "sonner";
import { useCart } from "@/hooks/useCart";
import { Separator } from "@/components/ui/separator";

interface ProductDetailProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductDetail = ({ product, open, onOpenChange }: ProductDetailProps) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedPresentation, setSelectedPresentation] = useState(
    product.variants && product.variants.length > 0
      ? product.variants[0].presentacion
      : "Unidad"
  );
  
  const currentPrice = product.variants && product.variants.length > 0
    ? product.variants.find(v => v.presentacion === selectedPresentation)?.precio || product.price
    : product.price;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedPresentation, currentPrice);
    toast.success("Producto añadido al carrito", {
      description: `${quantity} x ${product.name} (${selectedPresentation})`,
    });
    onOpenChange(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
    }).format(price);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] md:max-w-7xl p-0 overflow-hidden sm:rounded-2xl border-none h-[95vh] sm:h-[85vh] flex flex-col">
        <div className="flex-1 overflow-y-auto no-scrollbar">
          <div className="grid md:grid-cols-2 lg:grid-cols-[1.1fr,0.9fr] h-full">
            {/* Image Section - Immersive Header on Mobile */}
            <div className="relative bg-muted/30 h-[40vh] md:h-full flex items-center justify-center p-4 md:p-8">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain md:object-contain drop-shadow-xl"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/20">
                  <ShoppingCart className="w-24 h-24" />
                </div>
              )}
              <div className="absolute top-4 left-4 z-10">
                <Badge className="capitalize text-xs md:text-sm py-1 px-4 shadow-lg backdrop-blur-md bg-primary/90 border-none">
                  {product.category}
                </Badge>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-6 md:p-12 flex flex-col bg-background">
              <DialogHeader className="mb-8 space-y-4">
                <div className="space-y-1">
                  <DialogTitle className="text-2xl md:text-5xl font-black text-left leading-tight tracking-tight">
                    {product.name}
                  </DialogTitle>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-3xl md:text-5xl font-black text-primary tracking-tighter">
                      {formatPrice(currentPrice)}
                    </span>
                  </div>
                  {product.inStock ? (
                    <Badge variant="outline" className="text-[10px] md:text-xs uppercase font-bold text-green-600 border-green-200 bg-green-50 gap-1 h-7">
                      <Check className="w-3 h-3 md:w-4 md:h-4" /> En Stock
                    </Badge>
                  ) : (
                    <Badge variant="destructive" className="text-[10px] md:text-xs uppercase font-bold h-7">Agotado</Badge>
                  )}
                </div>
              </DialogHeader>

              <div className="space-y-8 flex-1">
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
                    Descripción del Producto
                  </h4>
                  <p className="text-sm md:text-lg text-muted-foreground leading-relaxed font-medium">
                    {product.description || "Este producto es parte de nuestra selecta línea de importaciones de alta calidad."}
                  </p>
                </div>

                {product.variants && product.variants.length > 0 && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100">
                    <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                      Opciones Disponibles
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {product.variants.map((variant) => (
                        <button
                          key={variant.id}
                          onClick={() => setSelectedPresentation(variant.presentacion)}
                          className={`flex flex-col p-4 rounded-2xl text-left transition-all border-2 ${
                            selectedPresentation === variant.presentacion
                              ? "border-primary bg-primary/5 shadow-md ring-1 ring-primary"
                              : "border-border bg-card hover:border-primary/30"
                          }`}
                        >
                          <span className={`text-[10px] md:text-xs font-bold mb-1 uppercase tracking-wider ${selectedPresentation === variant.presentacion ? "text-primary" : "text-muted-foreground"}`}>
                            {variant.presentacion}
                          </span>
                          <span className="text-base md:text-xl font-black">{formatPrice(variant.precio)}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <Separator className="opacity-50" />

                {/* desktop buy section - hidden on mobile buy bar is used instead */}
                <div className="hidden md:flex flex-col gap-6 pt-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                      Cantidad
                    </h4>
                    <div className="flex items-center bg-muted/50 rounded-xl p-1.5 h-12">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 text-primary hover:bg-primary/10 rounded-lg"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                      >
                        <Minus className="w-5 h-5" />
                      </Button>
                      <span className="w-14 text-center font-black text-xl tabular-nums">
                        {quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 text-primary hover:bg-primary/10 rounded-lg"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground font-bold text-lg">Total del Pedido:</span>
                    <span className="text-4xl font-black text-primary tracking-tighter">
                      {formatPrice(currentPrice * quantity)}
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full h-16 text-xl font-black gap-3 shadow-xl shadow-primary/20 hover:shadow-primary/30 transform hover:-translate-y-1 transition-all rounded-2xl"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-6 h-6" />
                    Proceder con la Compra
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Sticky Mobile Footer */}
         <div className="md:hidden p-5 bg-background/80 backdrop-blur-xl border-t border-border shadow-[0_-10px_30px_rgba(0,0,0,0.1)] z-30">
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center bg-muted/60 rounded-xl p-1 shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-primary"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-10 text-center font-bold text-lg tabular-nums">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-primary"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <Button 
                className="flex-1 h-14 text-base font-black gap-3 shadow-xl shadow-primary/25 rounded-2xl"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <div className="flex flex-col items-start leading-none gap-0.5">
                   <span className="text-[10px] opacity-70 font-bold uppercase tracking-widest text-white/90">Añadir</span>
                   <span className="text-base text-white">{formatPrice(currentPrice * quantity)}</span>
                </div>
                <ShoppingCart className="w-5 h-5 ml-auto text-white/50" />
              </Button>
            </div>
         </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
