import { useState, useEffect } from "react";
import { Product } from "@/components/products/ProductCard";
import { api } from "@/services/api";

export interface Category {
  id: string;
  nombre: string;
  slug: string;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const [apiProducts, apiCategories] = await Promise.all([
          api.getProducts(),
          api.getCategories()
        ]);

        const mappedProducts: Product[] = apiProducts.map(p => ({
          id: p.id,
          name: p.nombre,
          description: p.descripcion || "",
          price: p.precio,
          fakePrice: p.precio_falso || undefined,
          wholesalePrice: p.precio_falso || undefined, // Keep for backward compat
          category: p.categoria?.nombre || "General",
          categoryId: p.categoria_id,
          image: p.imagenes_relacionadas.length > 0
            ? p.imagenes_relacionadas[0].url
            : "https://via.placeholder.com/300x300?text=Sin+Imagen",
          inStock: p.estado,
          variants: p.variantes,
        }));

        setProducts(mappedProducts);
        setCategories(apiCategories);

      } catch (err) {
        setError("No se pudo cargar el catálogo. Intenta más tarde.");
        console.error("Error fetching products:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, categories, isLoading, error };
};
