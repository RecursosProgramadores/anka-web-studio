import { useState, useEffect } from "react";
import { Product } from "@/components/products/ProductCard";
import { api } from "@/services/api";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
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
          wholesalePrice: p.precio_falso || undefined,
          category: p.categoria.nombre,
          image: p.imagenes_relacionadas.length > 0 ? p.imagenes_relacionadas[0].url : undefined,
          inStock: p.estado, // Using estado for inStock
        }));

        setProducts(mappedProducts);
        setCategories(apiCategories.map(c => c.nombre));

      } catch (err) {
        setError("Error al cargar los productos");
        console.error("Error fetching products:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, categories, isLoading, error };
};
