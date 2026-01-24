import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Smartphone,
    CheckCircle2,
    ChevronLeft,
    Wallet,
    Truck,
    ShieldCheck,
    ShoppingBag,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { api, ApiPaymentMethod } from "@/services/api";
import { toast } from "sonner";

const Checkout = () => {
    const { items, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [methods, setMethods] = useState<ApiPaymentMethod[]>([]);
    const [selectedMethod, setSelectedMethod] = useState<ApiPaymentMethod | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Form State
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        city: ""
    });

    useEffect(() => {
        const fetchMethods = async () => {
            try {
                const data = await api.getPaymentMethods();
                const active = data.filter(m => m.estado);
                setMethods(active);
                if (active.length > 0) {
                    setSelectedMethod(active[0]);
                }
            } catch (error) {
                console.error("Error fetching payment methods:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchMethods();
    }, []);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("es-PE", {
            style: "currency",
            currency: "PEN",
        }).format(price);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleOrderCompletion = () => {
        // Basic validation
        if (!formData.firstName || !formData.lastName || !formData.address || !formData.phone || !formData.city) {
            toast.error("Por favor, completa todos los campos de envío.");
            return;
        }

        if (!selectedMethod) {
            toast.error("Por favor, selecciona un método de pago.");
            return;
        }

        // WhatsApp Message Construction
        const WHATSAPP_NUMBER = "51989544896";

        let message = `*NUEVO PEDIDO - ANKA STUIO*\n\n`;
        message += `👤 *Cliente:* ${formData.firstName} ${formData.lastName}\n`;
        message += `📍 *Dirección:* ${formData.address}\n`;
        message += `🏙️ *Ciudad/Distrito:* ${formData.city}\n`;
        message += `📞 *WhatsApp:* ${formData.phone}\n\n`;

        message += `🛍️ *Detalle del Pedido:*\n`;
        items.forEach(item => {
            const priceType = item.selectedPriceType === "retail" ? "Menor" : "Mayor";
            message += `• ${item.name} (${item.quantity}u) - Venta al ${priceType}: ${formatPrice(item.selectedPrice * item.quantity)}\n`;
        });

        message += `\n💰 *Total a invertir:* ${formatPrice(totalPrice)}\n`;
        message += `💳 *Método de Pago:* ${selectedMethod.nombre_banco}\n\n`;
        message += `_Hola, acabo de realizar mi pedido en la web de ANKA. Quedo atento a la confirmación final._`;

        const encodedMessage = encodeURIComponent(message);
        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Redirect to WhatsApp
        window.open(waUrl, "_blank");

        // UI Feedback
        setStep(3);
        setTimeout(() => {
            clearCart();
        }, 1000);
    };

    if (step === 3) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center p-6 pt-32">
                    <div className="max-w-md w-full text-center space-y-6 animate-in zoom-in duration-500">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle2 className="w-10 h-10 text-primary" />
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-3xl font-black tracking-tighter uppercase">¡Finalizado!</h1>
                            <p className="text-muted-foreground font-medium">
                                Tu pedido ha sido enviado exitosamente vía WhatsApp.
                                Revisa tu conversación con nuestro asesor comercial.
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
                                        <Input
                                            id="firstName"
                                            placeholder="Ej. Juan Manuel"
                                            className="rounded-xl border-muted bg-muted/10 h-12"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Apellidos</Label>
                                        <Input
                                            id="lastName"
                                            placeholder="Ej. Quispe Pérez"
                                            className="rounded-xl border-muted bg-muted/10 h-12"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <Label htmlFor="address" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Dirección Exacta</Label>
                                        <Input
                                            id="address"
                                            placeholder="Av. Principal 123 - Interior 4"
                                            className="rounded-xl border-muted bg-muted/10 h-12"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">WhatsApp / Celular</Label>
                                        <Input
                                            id="phone"
                                            placeholder="Ej. 989544896"
                                            className="rounded-xl border-muted bg-muted/10 h-12"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="city" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Ciudad / Distrito</Label>
                                        <Input
                                            id="city"
                                            placeholder="Ej. Los Olivos, Lima"
                                            className="rounded-xl border-muted bg-muted/10 h-12"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Step 2: Payment */}
                            <section className="space-y-6 bg-background p-8 rounded-3xl shadow-sm border border-border/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-black">2</div>
                                    <h2 className="text-xl font-black uppercase tracking-tight">Método de Pago</h2>
                                </div>

                                {isLoading ? (
                                    <div className="py-10 flex flex-col items-center gap-4">
                                        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Cargando métodos...</p>
                                    </div>
                                ) : (
                                    <>
                                        <RadioGroup
                                            value={selectedMethod?.id}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                            onValueChange={(id) => {
                                                const method = methods.find(m => m.id === id);
                                                if (method) setSelectedMethod(method);
                                            }}
                                        >
                                            {methods.map((method) => (
                                                <div key={method.id}>
                                                    <RadioGroupItem value={method.id} id={method.id} className="peer sr-only" />
                                                    <Label
                                                        htmlFor={method.id}
                                                        className="flex flex-col items-center justify-between rounded-2xl border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary transition-all cursor-pointer h-full text-center"
                                                    >
                                                        {method.imagen_relacionada ? (
                                                            <img src={method.imagen_relacionada.url} alt={method.nombre_banco} className="mb-3 h-10 object-contain" />
                                                        ) : (
                                                            <Wallet className="mb-3 h-8 w-8 opacity-60 text-primary" />
                                                        )}
                                                        <span className="text-xs font-black uppercase tracking-wider">{method.nombre_banco}</span>
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>

                                        <div className="mt-8 p-6 rounded-2xl bg-muted/10 border border-border/50">
                                            {selectedMethod ? (
                                                <div className="space-y-6 text-center animate-in fade-in duration-300 flex flex-col items-center">
                                                    <div className="space-y-2">
                                                        <p className="text-sm font-bold uppercase tracking-tight text-primary">{selectedMethod.nombre_banco}</p>
                                                        <p className="text-sm font-medium leading-relaxed">{selectedMethod.descripcion}</p>

                                                        {selectedMethod.numero_cuenta && (
                                                            <div className="pt-2">
                                                                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Número de Cuenta/Celular</p>
                                                                <p className="text-xl font-black tabular-nums tracking-tighter">{selectedMethod.numero_cuenta}</p>
                                                            </div>
                                                        )}

                                                        {selectedMethod.nombre_cuenta && (
                                                            <div className="pt-1">
                                                                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Titular</p>
                                                                <p className="text-xs font-black uppercase italic">{selectedMethod.nombre_cuenta}</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {selectedMethod.tipo === "manual" && selectedMethod.imagen_relacionada && (
                                                        <div className="w-48 h-48 bg-white p-2 rounded-2xl shadow-xl border border-border/20 flex items-center justify-center">
                                                            <img src={selectedMethod.imagen_relacionada.url} className="w-full h-full object-contain p-2" alt="QR Code" />
                                                        </div>
                                                    )}

                                                    <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                                                        <Smartphone className="w-3 h-3 text-primary" />
                                                        <p className="text-[9px] font-black uppercase tracking-widest text-primary text-center leading-tight">Envía tu comprobante con este resumen</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="text-center py-4">
                                                    <p className="text-sm text-muted-foreground">Seleccione un método de pago para continuar.</p>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </section>
                        </div>

                        {/* Right Column: Order Summary */}
                        <div className="lg:col-span-12 xl:col-span-5">
                            <div className="sticky top-32 space-y-6">
                                <Card className="rounded-3xl border-none shadow-xl overflow-hidden">
                                    <CardContent className="p-0">
                                        <div className="bg-primary p-8 text-primary-foreground">
                                            <h3 className="text-xl font-black uppercase tracking-tighter mb-2 italic">Resumen del Pedido</h3>
                                            <p className="text-xs opacity-70 font-medium">Revisa tu stock antes de procesar.</p>
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
                                                <div className="flex justify-between text-sm tracking-tight text-muted-foreground">
                                                    <span>Subtotal</span>
                                                    <span>{formatPrice(totalPrice)}</span>
                                                </div>
                                                <div className="flex justify-between text-sm tracking-tight text-green-600">
                                                    <span>Envío Estimado</span>
                                                    <span>GRATIS</span>
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
                                                disabled={items.length === 0 || !selectedMethod}
                                            >
                                                PROCESAR PEDIDO
                                            </Button>

                                            <div className="mt-6 space-y-3">
                                                <div className="flex items-center gap-2 text-[9px] font-bold text-muted-foreground uppercase tracking-widest justify-center">
                                                    <ShieldCheck className="w-3 h-3 text-green-600" />
                                                    Compra Segura vía WhatsApp
                                                </div>
                                                <div className="flex items-center gap-2 text-[9px] font-bold text-muted-foreground uppercase tracking-widest justify-center">
                                                    <Truck className="w-3 h-3 text-blue-600" />
                                                    Despacho Inmediato ANKA
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
