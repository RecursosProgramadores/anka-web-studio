import { useState } from "react";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Check, Minus, Plus, Tag, ShieldCheck, Truck } from "lucide-react";
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
    const [selectedType, setSelectedType] = useState<"retail" | "wholesale">("retail");
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("es-PE", {
            style: "currency",
            currency: "PEN",
        }).format(price);
    };

    const currentPrice = selectedType === "retail" ? product.price : (product.wholesalePrice || product.price);

    const handleAddToCart = () => {
        addToCart(product, quantity, selectedType);
        toast.success(`Producto añadido`, {
            description: `${product.name} (${quantity} uni.)`,
            icon: <ShoppingCart className="w-4 h-4 text-primary" />,
        });
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden border-none shadow-2xl bg-background rounded-2xl">
                <div className="flex flex-col md:flex-row h-full max-h-[90vh] md:max-h-[550px]">
                    {/* Left side: Image & Features */}
                    <div className="w-full md:w-[42%] bg-muted/20 relative flex flex-col border-r border-border/40">
                        <div className="flex-1 relative group overflow-hidden">
                            {product.image ? (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-muted-foreground/10 bg-muted/30">
                                    <ShoppingCart className="w-24 h-24" />
                                </div>
                            )}

                            <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                                <Badge variant="secondary" className="bg-background/90 hover:bg-background/90 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border-none shadow-sm text-foreground">
                                    {product.category}
                                </Badge>
                                {product.wholesalePrice && (
                                    <Badge className="bg-primary hover:bg-primary text-primary-foreground border-none shadow-sm text-[9px] font-bold uppercase tracking-wider px-2 py-0.5">
                                        Mayorista
                                    </Badge>
                                )}
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="p-5 bg-background/40 backdrop-blur-sm border-t border-border/40 hidden md:block">
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <div className="space-y-0.5">
                                        <p className="text-[10px] font-bold text-foreground uppercase tracking-tight">Calidad Garantizada</p>
                                        <p className="text-[9px] text-muted-foreground leading-tight">Control de calidad riguroso en cada producto.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Truck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <div className="space-y-0.5">
                                        <p className="text-[10px] font-bold text-foreground uppercase tracking-tight">Despacho Rápido</p>
                                        <p className="text-[9px] text-muted-foreground leading-tight">Envíos a todo el territorio nacional.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Product Info & Actions */}
                    <div className="w-full md:w-[58%] flex flex-col p-6 md:p-8 bg-background overflow-y-auto">
                        <div className="flex-1 flex flex-col gap-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight">
                                    {product.name}
                                </h2>
                                <p className="text-xs text-muted-foreground leading-relaxed font-medium line-clamp-3">
                                    {product.description || "Este producto es parte de nuestra selecta línea de importaciones. Calidad y durabilidad garantizada para potenciar tu negocio."}
                                </p>
                            </div>

                            <Separator className="opacity-60" />

                            {/* Selection Logic */}
                            <div className="space-y-4">
                                <h4 className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground/70">Selecciona modalidad</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setSelectedType("retail")}
                                        className={`flex flex-col p-4 rounded-xl border-2 transition-all duration-200 text-left ${selectedType === "retail"
                                            ? "border-primary bg-primary/5 shadow-sm"
                                            : "border-border hover:border-primary/20 hover:bg-accent/5"
                                            }`}
                                    >
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-[9px] font-bold uppercase opacity-60">Al Menor</span>
                                            {selectedType === "retail" && <Check className="w-3 h-3 text-primary stroke-[3]" />}
                                        </div>
                                        <span className="text-lg font-bold tracking-tight">{formatPrice(product.price)}</span>
                                    </button>

                                    {product.wholesalePrice ? (
                                        <button
                                            onClick={() => setSelectedType("wholesale")}
                                            className={`flex flex-col p-4 rounded-xl border-2 transition-all duration-200 text-left relative overflow-hidden ${selectedType === "wholesale"
                                                ? "border-primary bg-primary/5 shadow-sm"
                                                : "border-border hover:border-primary/20 hover:bg-accent/5"
                                                }`}
                                        >
                                            <div className="flex items-center justify-between mb-1 text-left">
                                                <span className="text-[9px] font-bold uppercase opacity-60">Al Mayor</span>
                                                {selectedType === "wholesale" && <Check className="w-3 h-3 text-primary stroke-[3]" />}
                                            </div>
                                            <span className="text-lg font-bold tracking-tight">{formatPrice(product.wholesalePrice)}</span>
                                            <Badge className="absolute -right-6 -top-1 bg-green-500 hover:bg-green-500 text-[7px] rotate-45 px-6 pt-2 h-5 font-black lowercase tracking-tighter">ahorro</Badge>
                                        </button>
                                    ) : (
                                        <div className="p-4 rounded-xl border-2 border-dashed border-muted bg-muted/10 opacity-40 cursor-not-allowed">
                                            <span className="block text-[9px] font-bold uppercase opacity-40 mb-1">Al Mayor</span>
                                            <span className="text-xs font-semibold italic opacity-30">No disponible</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Quantity & Summary */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-muted/10 p-4 rounded-2xl border border-border/30">
                                <div className="space-y-2 w-full sm:w-auto">
                                    <h4 className="text-[9px] font-bold uppercase tracking-[0.1em] text-muted-foreground/70">Cantidad</h4>
                                    <div className="flex items-center justify-between bg-background p-1 rounded-lg border border-border/50 w-full sm:w-32">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 rounded hover:bg-muted active:scale-95"
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        >
                                            <Minus className="w-3 h-3" />
                                        </Button>
                                        <span className="font-bold text-base tabular-nums">{quantity}</span>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 rounded hover:bg-muted active:scale-95"
                                            onClick={() => setQuantity(quantity + 1)}
                                        >
                                            <Plus className="w-3 h-3" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="text-right flex flex-col justify-center sm:border-l border-border/20 sm:pl-6 w-full sm:w-auto">
                                    <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mb-0.5">Total Estimado</p>
                                    <p className="text-2xl font-bold text-primary tracking-tight">
                                        {formatPrice(currentPrice * quantity)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Action Area */}
                        <div className="pt-6 mt-auto flex flex-col gap-3">
                            <Button
                                className="w-full h-12 text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 transition-all group rounded-xl"
                                onClick={handleAddToCart}
                                disabled={!product.inStock}
                            >
                                <ShoppingCart className="w-4 h-4 mr-2 group-hover:rotate-6 transition-transform" />
                                Añadir al Carrito
                            </Button>
                            <div className="flex items-center justify-center gap-3 opacity-30">
                                <div className="h-[1px] flex-1 bg-muted-foreground/30" />
                                <Tag className="w-2.5 h-2.5" />
                                <p className="text-[8px] font-bold uppercase tracking-widest whitespace-nowrap">
                                    Importaciones ANKA
                                </p>
                                <div className="h-[1px] flex-1 bg-muted-foreground/30" />
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProductDetail;
