export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderDetails {
  name: string;
  phone: string;
  address: string;
  paymentMode: 'cod' | 'upi';
  totalAmount: number;
}
