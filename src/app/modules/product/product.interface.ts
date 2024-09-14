export interface Product {
  name: string;
  currentPrice: number;
  price: number;
  description: string;
  productFeatures: string[];
  category: string;
  categoryBanner: string;
  bannerImage: string;
  moreImages: string[];
  stockQuantity: number;
}

export interface ProductOrder {
  quantity: number;
  _id: string;
}
