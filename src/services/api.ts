const BASE_URL = "https://api.flyup.rest/api/v1";
const EMPRESA_SLUG = "anka";

export interface ApiCategory {
  id: string;
  nombre: string;
  slug: string;
  descripcion: string;
}

export interface ApiProduct {
  id: string;
  nombre: string;
  descripcion: string | null;
  sku: string | null;
  slug: string;
  destacado: boolean;
  precio: number;
  precio_falso: number | null;
  estado: boolean;
  categoria: ApiCategory;
  imagenes_relacionadas: {
    id: string;
    url: string;
    orden: number;
  }[];
}

export interface ApiResponse<T> {
  status: boolean;
  result: T;
}

export const api = {
  async getCategories(): Promise<ApiCategory[]> {
    const response = await fetch(`${BASE_URL}/categorias/empresa/${EMPRESA_SLUG}`);
    if (!response.ok) throw new Error("Failed to fetch categories");
    const data: ApiResponse<ApiCategory[]> = await response.json();
    return data.result;
  },

  async getProducts(): Promise<ApiProduct[]> {
    const response = await fetch(`${BASE_URL}/productos/empresa/${EMPRESA_SLUG}`);
    if (!response.ok) throw new Error("Failed to fetch products");
    const data: ApiResponse<ApiProduct[]> = await response.json();
    return data.result;
  },

  async getProductBySlug(slug: string): Promise<ApiProduct> {
    const response = await fetch(`${BASE_URL}/productos/${slug}/empresa/${EMPRESA_SLUG}`);
    if (!response.ok) throw new Error("Failed to fetch product");
    const data: ApiResponse<ApiProduct> = await response.json();
    return data.result;
  }
};
