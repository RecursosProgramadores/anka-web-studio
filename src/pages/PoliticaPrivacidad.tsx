import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PoliticaPrivacidad = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-24 pb-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold mb-8 text-primary">Política de Privacidad</h1>
                    <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introducción</h2>
                            <p>
                                En NEGOCIACIONES ANKA E.I.R.L., nos comprometemos a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos su información personal cuando visita nuestro sitio web.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Información que Recopilamos</h2>
                            <p>
                                Podemos recopilar información personal que usted nos proporciona directamente, como su nombre, dirección de correo electrónico, número de teléfono y detalles de facturación cuando realiza una compra o se pone en contacto con nosotros.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Uso de la Información</h2>
                            <p>
                                Utilizamos su información para procesar sus pedidos, responder a sus consultas, enviarle actualizaciones sobre su compra y, si usted lo autoriza, enviarle material promocional y ofertas especiales.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Protección de Datos</h2>
                            <p>
                                Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Sus Derechos</h2>
                            <p>
                                Usted tiene derecho a acceder, rectificar o eliminar sus datos personales en cualquier momento. Para ejercer estos derechos, por favor contáctenos a través de los canales proporcionados en nuestra sección de contacto.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PoliticaPrivacidad;
