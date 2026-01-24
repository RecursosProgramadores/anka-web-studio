import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    CreditCard,
    Smartphone,
    CheckCircle2,
    ChevronLeft,
    Wallet,
    Truck,
    ShieldCheck,
    ShoppingBag,
    Tag
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Checkout = () => {
    const { items, totalPrice, totalItems, clearCart } = useCart();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [step, setStep] = useState(1);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("es-PE", {
            style: "currency",
            currency: "PEN",
        }).format(price);
    };

    const handleOrderCompletion = () => {
        setStep(3);
        setTimeout(() => {
            clearCart();
        }, 1000);
    };

    if (step === 3) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center p-6">
                    <div className="max-w-md w-full text-center space-y-6 animate-in zoom-in duration-500">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle2 className="w-10 h-10 text-primary" />
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-3xl font-black tracking-tighter uppercase">¡Pedido Recibido!</h1>
                            <p className="text-muted-foreground font-medium">
                                Gracias por confiar en ANKA. Tu pedido ha sido procesado con éxito.
                                Nos pondremos en contacto contigo vía WhatsApp para la confirmación final.
                            </p>
                        </div>
                        <Button className="w-full h-12 font-bold uppercase tracking-widest" onClick={() => navigate("/productos")}>
                            Volver a la tienda
                        </Button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-muted/20 flex flex-col pt-20 md:pt-28">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto flex flex-col gap-8">

                    <button
                        onClick={() => navigate("/productos")}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider w-fit"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Volver a Productos
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                        {/* Left Column: Forms */}
                        <div className="lg:col-span-7 space-y-8">

                            {/* Step 1: Shipping */}
                            <section className="space-y-6 bg-background p-8 rounded-3xl shadow-sm border border-border/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-black">1</div>
                                    <h2 className="text-xl font-black uppercase tracking-tight">Información de Envío</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Nombres</Label>
                                        <Input id="firstName" placeholder="Ej. Juan Manuel" className="rounded-xl border-muted bg-muted/10" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Apellidos</Label>
                                        <Input id="lastName" placeholder="Ej. Quispe Pérez" className="rounded-xl border-muted bg-muted/10" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <Label htmlFor="address" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Dirección</Label>
                                        <Input id="address" placeholder="Av. Principal 123 - Interior 4" className="rounded-xl border-muted bg-muted/10" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">WhatsApp / Celular</Label>
                                        <Input id="phone" placeholder="Ej. 989544896" className="rounded-xl border-muted bg-muted/10" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="city" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Ciudad / Distrito</Label>
                                        <Input id="city" placeholder="Ej. Los Olivos, Lima" className="rounded-xl border-muted bg-muted/10" />
                                    </div>
                                </div>
                            </section>

                            {/* Step 2: Payment */}
                            <section className="space-y-6 bg-background p-8 rounded-3xl shadow-sm border border-border/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-black">2</div>
                                    <h2 className="text-xl font-black uppercase tracking-tight">Método de Pago</h2>
                                </div>

                                <RadioGroup
                                    defaultValue="card"
                                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                    onValueChange={setPaymentMethod}
                                >
                                    <div>
                                        <RadioGroupItem value="card" id="card" className="peer sr-only" />
                                        <Label
                                            htmlFor="card"
                                            className="flex flex-col items-center justify-between rounded-2xl border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary transition-all cursor-pointer"
                                        >
                                            <CreditCard className="mb-3 h-8 w-8 opacity-60" />
                                            <span className="text-xs font-black uppercase tracking-wider">Tarjeta</span>
                                        </Label>
                                    </div>
                                    <div>
                                        <RadioGroupItem value="yape" id="yape" className="peer sr-only" />
                                        <Label
                                            htmlFor="yape"
                                            className="flex flex-col items-center justify-between rounded-2xl border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary transition-all cursor-pointer"
                                        >
                                            <Smartphone className="mb-3 h-8 w-8 opacity-60" />
                                            <span className="text-xs font-black uppercase tracking-wider">Yape / Plin</span>
                                        </Label>
                                    </div>
                                    <div>
                                        <RadioGroupItem value="transfer" id="transfer" className="peer sr-only" />
                                        <Label
                                            htmlFor="transfer"
                                            className="flex flex-col items-center justify-between rounded-2xl border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary transition-all cursor-pointer"
                                        >
                                            <Wallet className="mb-3 h-8 w-8 opacity-60" />
                                            <span className="text-xs font-black uppercase tracking-wider">Efectivo</span>
                                        </Label>
                                    </div>
                                </RadioGroup>

                                <div className="mt-8 p-6 rounded-2xl bg-muted/10 border border-border/50">
                                    {paymentMethod === "card" && (
                                        <div className="space-y-4 animate-in fade-in duration-300">
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Número de Tarjeta</Label>
                                                <Input placeholder="0000 0000 0000 0000" className="rounded-xl" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Vencimiento</Label>
                                                    <Input placeholder="MM / YY" className="rounded-xl" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">CVC</Label>
                                                    <Input placeholder="123" className="rounded-xl" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {paymentMethod === "yape" && (
                                        <div className="space-y-6 text-center animate-in fade-in duration-300 flex flex-col items-center">
                                            <div className="space-y-2">
                                                <p className="text-sm font-bold">Escanea el código QR para pagar</p>
                                                <p className="text-xs text-muted-foreground">O yapea al número: <span className="font-black text-foreground">989 544 896</span></p>
                                            </div>
                                            <div className="w-48 h-48 bg-white p-2 rounded-2xl shadow-inner border border-border/20 flex items-center justify-center">
                                                <div className="w-44 h-44 bg-muted animate-pulse rounded-xl flex items-center justify-center relative">
                                                    {/* Placeholder for QR - In real app use generate_image if needed or static asset */}
                                                    <Smartphone className="w-12 h-12 opacity-10" />
                                                    <span className="absolute bottom-2 text-[8px] font-black uppercase opacity-20 tracking-widest">QR MOCKUP</span>
                                                </div>
                                            </div>
                                            <p className="text-[10px] text-muted-foreground italic">* Sube el comprobante en el último paso vía WhatsApp.</p>
                                        </div>
                                    )}

                                    {paymentMethod === "transfer" && (
                                        <div className="space-y-4 animate-in fade-in duration-300">
                                            <div className="bg-primary/5 p-4 rounded-xl space-y-2 border border-primary/10">
                                                <p className="text-sm font-bold text-primary">Contra-entrega / Efectivo</p>
                                                <p className="text-xs leading-relaxed text-muted-foreground">
                                                    Paga cómodamente al recibir tu producto. Válido para Lima Metropolitana.
                                                    Nuestros mensajeros cuentan con vuelto.
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2 text-[10px] font-bold text-green-600">
                                                <CheckCircle2 className="w-3 h-3" />
                                                SERVICIO DISPONIBLE EN TU ZONA
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </section>
                        </div>

                        {/* Right Column: Order Summary */}
                        <div className="lg:col-span-12 xl:col-span-5">
                            <div className="sticky top-32 space-y-6">
                                <Card className="rounded-3xl border-none shadow-xl overflow-hidden">
                                    <CardContent className="p-0">
                                        <div className="bg-primary p-8 text-primary-foreground">
                                            <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Resumen de Inversión</h3>
                                            <p className="text-xs opacity-70 font-medium">Estás a un paso de potenciar tu negocio.</p>
                                        </div>

                                        <div className="p-8">
                                            <ScrollArea className="max-h-[300px] pr-4 -mr-4">
                                                <div className="space-y-6">
                                                    {items.map((item) => (
                                                        <div key={`${item.id}-${item.selectedPriceType}`} className="flex gap-4">
                                                            <div className="w-16 h-16 bg-muted rounded-xl overflow-hidden flex-shrink-0">
                                                                {item.image ? (
                                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                                ) : (
                                                                    <div className="w-full h-full flex items-center justify-center">
                                                                        <ShoppingBag className="w-6 h-6 opacity-10" />
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className="text-sm font-black truncate">{item.name}</h4>
                                                                <div className="flex items-center justify-between mt-1">
                                                                    <p className="text-[10px] text-muted-foreground font-bold">
                                                                        {item.quantity} x {formatPrice(item.selectedPrice)}
                                                                    </p>
                                                                    <p className="text-sm font-bold text-primary">
                                                                        {formatPrice(item.selectedPrice * item.quantity)}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </ScrollArea>

                                            <Separator className="my-8" />

                                            <div className="space-y-4 font-bold">
                                                <div className="flex justify-between text-sm tracking-tight">
                                                    <span className="text-muted-foreground">Subtotal</span>
                                                    <span>{formatPrice(totalPrice)}</span>
                                                </div>
                                                <div className="flex justify-between text-sm tracking-tight">
                                                    <span className="text-muted-foreground">Envío</span>
                                                    <span className="text-green-600">GRATIS</span>
                                                </div>
                                                <Separator className="my-2" />
                                                <div className="flex justify-between text-2xl tracking-tighter font-black">
                                                    <span>Total</span>
                                                    <span className="text-primary">{formatPrice(totalPrice)}</span>
                                                </div>
                                            </div>

                                            <Button
                                                className="w-full h-16 mt-8 rounded-2xl text-lg font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
                                                onClick={handleOrderCompletion}
                                                disabled={items.length === 0}
                                            >
                                                PROCESAR PEDIDO
                                            </Button>

                                            <div className="mt-6 space-y-3">
                                                <div className="flex items-center gap-2 text-[9px] font-bold text-muted-foreground uppercase tracking-widest justify-center">
                                                    <ShieldCheck className="w-3 h-3 text-green-600" />
                                                    Transacción Encriptada y Segura
                                                </div>
                                                <div className="flex items-center gap-2 text-[9px] font-bold text-muted-foreground uppercase tracking-widest justify-center">
                                                    <Truck className="w-3 h-3 text-blue-600" />
                                                    Garantía de Entrega ANKA
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Checkout;
