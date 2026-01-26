import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetFooter
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

interface CartDrawerProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const CartDrawer = ({ open, onOpenChange }: CartDrawerProps) => {
    const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
    const navigate = useNavigate();

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("es-PE", {
            style: "currency",
            currency: "PEN",
        }).format(price);
    };

    const handleCheckout = () => {
        onOpenChange(false);
        navigate("/checkout");
    };

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
                <SheetHeader className="p-6 border-b">
                    <div className="flex items-center justify-between">
                        <SheetTitle className="flex items-center gap-2 text-xl font-bold">
                            <ShoppingBag className="w-5 h-5 text-primary" />
                            Tu Carrito ({totalItems})
                        </SheetTitle>
                    </div>
                </SheetHeader>

                {items.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
                            <ShoppingCart className="w-10 h-10 text-muted-foreground opacity-20" />
                        </div>
                        <h3 className="text-lg font-semibold mb-1">Tu carrito está vacío</h3>
                        <p className="text-sm text-muted-foreground mb-6">
                            ¡Parece que aún no has añadido nada! Explora nuestros productos y encuentra lo que buscas.
                        </p>
                        <Button onClick={() => onOpenChange(false)}>Explorar Productos</Button>
                    </div>
                ) : (
                    <>
                        <ScrollArea className="flex-1 p-6">
                            <div className="space-y-6">
                                {items.map((item) => (
                                    <div key={`${item.id}-${item.selectedPresentation}`} className="flex gap-4">
                                        <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                                            {item.image ? (
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <ShoppingCart className="w-8 h-8 opacity-10" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <div className="flex items-start justify-between gap-2">
                                                <div>
                                                    <h4 className="text-sm font-bold line-clamp-1">{item.name}</h4>
                                                    <div className="mt-0.5 inline-block bg-primary/10 text-primary text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
                                                        {item.selectedPresentation}
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id, item.selectedPresentation)}
                                                    className="text-muted-foreground hover:text-destructive transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>

                                            <div className="mt-auto flex items-center justify-between">
                                                <div className="flex items-center gap-2 border rounded-md p-1">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6"
                                                        onClick={() => updateQuantity(item.id, item.selectedPresentation, item.quantity - 1)}
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </Button>
                                                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6"
                                                        onClick={() => updateQuantity(item.id, item.selectedPresentation, item.quantity + 1)}
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </Button>
                                                </div>
                                                <p className="font-bold text-primary">
                                                    {formatPrice(item.selectedPrice * item.quantity)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>

                        <SheetFooter className="p-6 border-t mt-auto flex-col sm:flex-col gap-4">
                            <div className="space-y-1.5 w-full">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>{formatPrice(totalPrice)}</span>
                                </div>
                                <div className="flex items-center justify-between text-lg font-black pt-2">
                                    <span>Total estimado</span>
                                    <span className="text-primary">{formatPrice(totalPrice)}</span>
                                </div>
                            </div>
                            <Button
                                className="w-full h-14 text-md font-black uppercase tracking-widest shadow-lg shadow-primary/20"
                                onClick={handleCheckout}
                            >
                                Finalizar Pedido
                            </Button>
                            <p className="text-[10px] text-center text-muted-foreground italic">
                                * Los precios son estimados. La confirmación final se realizará vía WhatsApp.
                            </p>
                        </SheetFooter>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default CartDrawer;
