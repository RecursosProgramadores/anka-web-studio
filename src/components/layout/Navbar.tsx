import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logoanka.jpg";
import CartDrawer from "../cart/CartDrawer";
import { useCart } from "@/hooks/useCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Productos", path: "/productos" },
    { name: "Contacto", path: "/contacto" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg border-b border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="ANKA E.I.R.L."
                className="h-10 md:h-14 w-auto object-contain transition-transform hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-primary-foreground text-sm font-bold uppercase tracking-widest transition-all duration-200 hover:opacity-100 ${isActive(link.path)
                    ? "opacity-100 border-b-2 border-primary-foreground pb-1"
                    : "opacity-70"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <a href="tel:989544896" className="hidden lg:flex items-center gap-2 text-primary-foreground opacity-90 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-bold">989 544 896</span>
              </a>

              <Button
                variant="ghost"
                size="icon"
                className="relative text-primary-foreground hover:bg-primary-foreground/10"
                aria-label="Toggle cart"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center animate-in zoom-in ring-2 ring-primary">
                    {totalItems}
                  </span>
                )}
              </Button>

              <Button variant="secondary" size="sm" asChild className="hidden md:flex font-bold">
                <Link to="/contacto">Contáctanos</Link>
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-primary-foreground p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 animate-in slide-in-from-top duration-300">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-primary-foreground py-3 px-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all ${isActive(link.path)
                      ? "bg-primary-foreground/20"
                      : "hover:bg-primary-foreground/10"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="grid grid-cols-2 gap-2 mt-2 px-2">
                  <Button variant="secondary" asChild className="font-bold">
                    <Link to="/contacto">Contacto</Link>
                  </Button>
                  <a
                    href="tel:989544896"
                    className="flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground rounded-md py-2 font-bold text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Llamar
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  );
};

export default Navbar;
