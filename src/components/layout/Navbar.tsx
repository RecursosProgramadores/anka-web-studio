import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Productos", path: "/productos" },
    { name: "Contacto", path: "/contacto" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-foreground rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg md:text-xl">A</span>
            </div>
            <div className="text-primary-foreground">
              <span className="font-bold text-lg md:text-xl tracking-wide">ANKA</span>
              <span className="hidden sm:block text-xs opacity-80">E.I.R.L.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-primary-foreground font-medium transition-all duration-200 hover:opacity-100 ${
                  isActive(link.path)
                    ? "opacity-100 border-b-2 border-primary-foreground pb-1"
                    : "opacity-80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:989544896" className="flex items-center gap-2 text-primary-foreground opacity-90 hover:opacity-100 transition-opacity">
              <Phone className="w-4 h-4" />
              <span className="text-sm">989 544 896</span>
            </a>
            <Button variant="secondary" size="sm" asChild>
              <Link to="/contacto">Contáctanos</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-primary-foreground py-2 px-4 rounded-lg transition-all ${
                    isActive(link.path)
                      ? "bg-primary-foreground/20"
                      : "hover:bg-primary-foreground/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="tel:989544896" 
                className="flex items-center gap-2 text-primary-foreground py-2 px-4"
              >
                <Phone className="w-4 h-4" />
                <span>989 544 896</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
