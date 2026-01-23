import { useState, useEffect } from "react";
import { Product } from "@/components/products/ProductCard";

// Sample products for demonstration
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Set de Escobas Premium",
    description: "Set completo de escobas para limpieza del hogar y negocios",
    price: 25.00,
    wholesalePrice: 18.00,
    category: "limpieza",
    inStock: true,
  },
  {
    id: "2",
    name: "Trapeador Industrial",
    description: "Trapeador resistente para uso comercial e industrial",
    price: 35.00,
    wholesalePrice: 28.00,
    category: "limpieza",
    inStock: true,
  },
  {
    id: "3",
    name: "Kit de Manualidades Creativas",
    description: "Set completo con materiales para proyectos creativos",
    price: 45.00,
    wholesalePrice: 35.00,
    category: "manualidades",
    inStock: true,
  },
  {
    id: "4",
    name: "Papel de Colores (100 hojas)",
    description: "Paquete de papeles de colores para manualidades escolares",
    price: 12.00,
    wholesalePrice: 8.00,
    category: "manualidades",
    inStock: true,
  },
  {
    id: "5",
    name: "Ula Ula Profesional",
    description: "Aro de gimnasia resistente para ejercicios y deportes",
    price: 20.00,
    wholesalePrice: 15.00,
    category: "deportes",
    inStock: true,
  },
  {
    id: "6",
    name: "Soga para Saltar",
    description: "Soga de calidad con mangos ergonómicos",
    price: 15.00,
    wholesalePrice: 10.00,
    category: "deportes",
    inStock: true,
  },
  {
    id: "7",
    name: "Pompones Escolares (Par)",
    description: "Pompones coloridos para animación y olimpiadas escolares",
    price: 18.00,
    wholesalePrice: 12.00,
    category: "olimpiadas",
    inStock: true,
  },
  {
    id: "8",
    name: "Set de Banderines",
    description: "Banderines decorativos para eventos y competencias",
    price: 22.00,
    wholesalePrice: 16.00,
    category: "olimpiadas",
    inStock: true,
  },
];

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        
        // API placeholder - Replace with actual API call
        // const response = await fetch('/api/products');
        // const data = await response.json();
        // setProducts(data);
        
        // Using sample data for demonstration
        await new Promise(resolve => setTimeout(resolve, 500));
        setProducts(sampleProducts);
        
      } catch (err) {
        setError("Error al cargar los productos");
        console.error("Error fetching products:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [...new Set(products.map(p => p.category))];

  return { products, categories, isLoading, error };
};
