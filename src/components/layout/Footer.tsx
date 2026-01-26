import { Link } from "react-router-dom";
import { Facebook, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logocomanka.jpg";
import libroReclamaciones from "@/assets/libroreclamaciones.jpeg";
import flyLogo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img
                src={logo}
                alt="ANKA E.I.R.L."
                className="h-16 w-auto object-contain rounded-lg"
              />
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Venta de productos importados y nacionales al por mayor y menor.
              El secreto para salir adelante es comenzar.
            </p>
            <p className="text-sm opacity-60 mt-2">RUC: 20614688549</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd__Q-_V4guEBa652EbEDuPK2IIlc0bwBL3RLEUOQ7M8jZdag/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block hover:opacity-80 transition-opacity w-fit"
            >
              <img
                src={libroReclamaciones}
                alt="Libro de Reclamaciones"
                className="h-16 w-auto object-contain bg-white p-1 rounded shadow-sm"
              />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 opacity-80" />
                <span className="text-sm opacity-80">989 544 896</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 opacity-80" />
                <div className="text-sm opacity-80">
                  <a href="mailto:negociacionesanka25@gmail.com" className="hover:opacity-100 block">
                    negociacionesanka25@gmail.com
                  </a>
                  <a href="mailto:ricardo_1991_26@hotmail.com" className="hover:opacity-100 block">
                    ricardo_1991_26@hotmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 opacity-80 flex-shrink-0" />
                <span className="text-sm opacity-80">
                  Jr. Cusco Nro 744 int 208, Galería Mina de Oro II, Lima - Perú
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/ANKA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook ANKA"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/somos_anka"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook Somos ANKA"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@anka22_store"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-sm opacity-60">
            <p>© {new Date().getFullYear()} NEGOCIACIONES ANKA E.I.R.L. </p>
            <span className="hidden md:inline">|</span>
            <Link to="/politica-privacidad" className="hover:opacity-100 transition-opacity">
              Política de Privacidad
            </Link>
            <span className="hidden md:inline">|</span>
            <Link to="/terminos-condiciones" className="hover:opacity-100 transition-opacity">
              Términos y Condiciones
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="text-sm opacity-50">Desarrollado por</span>
            <a
              href="https://fly-software.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={flyLogo} alt="Fly Software" className="h-7 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
