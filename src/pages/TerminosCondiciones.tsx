import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const TerminosCondiciones = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-24 pb-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold mb-8 text-primary">Términos y Condiciones</h1>
                    <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceptación de los Términos</h2>
                            <p>
                                Al acceder y utilizar este sitio web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Uso del Sitio</h2>
                            <p>
                                El contenido de las páginas de este sitio web es para su información general y uso personal únicamente. Está sujeto a cambios sin previo aviso.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Propiedad Intelectual</h2>
                            <p>
                                Este sitio web contiene material que es propiedad nuestra o tiene licencia para nosotros. Este material incluye, pero no se limita a, el diseño, la disposición, el aspecto, la apariencia y los gráficos. La reproducción está prohibida salvo de acuerdo con el aviso de copyright.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Limitación de Responsabilidad</h2>
                            <p>
                                Su uso de cualquier información o material en este sitio web es bajo su propio riesgo, por lo cual no seremos responsables. Será su propia responsabilidad asegurarse de que cualquier producto, servicio o información disponible a través de este sitio web cumpla con sus requisitos específicos.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Ley Aplicable</h2>
                            <p>
                                El uso de este sitio web y cualquier disputa que surja de dicho uso del sitio web están sujetos a las leyes de Perú.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TerminosCondiciones;
