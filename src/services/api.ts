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
  categoria_id: string;
  categoria: ApiCategory;
  imagenes_relacionadas: {
    id: string;
    url: string;
    orden: number;
  }[];
  variantes: {
    id: string;
    presentacion: string;
    precio: number;
  }[];
}

export interface ApiAd {
  id: string;
  titulo: string;
  url: string;
  estado: boolean;
  imagen_relacionada: {
    id: string;
    url: string;
    orden: number;
    entidad_tipo: string;
  };
}

export interface ApiPaymentMethod {
  id: string;
  nombre_banco: string;
  descripcion: string;
  numero_cuenta: string | null;
  nombre_cuenta: string | null;
  ruc: string | null;
  tipo: string;
  estado: boolean;
  imagen_relacionada: {
    id: string;
    url: string;
    orden: number;
    entidad_tipo: string;
  } | null;
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
  },

  async getAds(): Promise<ApiAd[]> {
    const response = await fetch(`${BASE_URL}/anuncios/empresa/${EMPRESA_SLUG}`);
    if (!response.ok) throw new Error("Failed to fetch ads");
    const data: ApiResponse<ApiAd[]> = await response.json();
    return data.result;
  },

  async getPaymentMethods(): Promise<ApiPaymentMethod[]> {
    const response = await fetch(`${BASE_URL}/metodos-pago/empresa/${EMPRESA_SLUG}`);
    if (!response.ok) throw new Error("Failed to fetch payment methods");
    const data: ApiResponse<ApiPaymentMethod[]> = await response.json();
    return data.result;
  }
};
