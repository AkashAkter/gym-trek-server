export interface Product {
  image: string;
  title: string;
  price: number;
  stock: number;
  details: string;
  category: string;
  tag?: string;
}

export interface ProductOrder {
  quantity: number;
  _id: string;
}
