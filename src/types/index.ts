export interface Category {
  slug: string;
  nameEn: string;
  nameTa: string;
  image: string;
}

export interface Product {
  id: number;
  slug: string;
  nameEn: string;
  nameTa: string;
  category: string;
  price: number;
  unit: string;
  rate: number;
  image?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  enabled?: boolean;
}

export interface CartItem {
  product: Product;
  qty: number;
}
