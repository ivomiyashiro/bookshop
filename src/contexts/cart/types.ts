import { Book } from '@/interfaces';

export interface ContextProps {
  cart: CartItem[];
  totalProducts: number;
  orderTotalPrice: number;

  //Methods
  addToCart: (book: Partial<CartItem>) => void;
  removeFromCart: (id: number) => void;
  updateProductQuantity: (book: CartItem) => void;
  resetCart: () => void;
}

export interface CartState { 
  cart: CartItem[];
  orderTotalPrice: number;
  totalProducts: number;
}

export interface CartItem extends Book {
  quantity: number;
}

export type CartActionType =
  | { type: '[CART] - LOAD FROM COOKIES', payload: CartItem[] }
  | { type: '[CART] - ADD TO CART', payload: Partial<CartItem> }
  | { type: '[CART] - REMOVE FROM CART', payload: CartItem[] }
  | { type: '[CART] - UPDATE PRODUCT CART QUANTITY', payload: CartItem[] }
  | { type: '[CART] - UPDATE ORDER SUMMARY', payload: number }
  | { type: '[CART] - RESET CART' }
  | { type: '[CART] - UPDATE TOTAL PRODUCTS QUANTITY', payload: number }
;
