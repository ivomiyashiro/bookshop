export interface Order {
  id:         number;
  totalPrice: number;
  status:     OrderStatus;
  createdAt:  Date;
  updatedAt:  Date;
  customerId: number;
  orderItems: OrderItem[];
  customer: {
    email: string;
    name:  string;
  };
}

export interface OrderItem {
  id:       number;
  quantity: number;
  price:    number;
  bookId:   number;
  orderId:  number;
}

export type OrderStatus = 'PAID' | 'CANCELLED' | 'PENDING'
