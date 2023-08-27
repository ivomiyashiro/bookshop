'use client';
import { useEffect, useReducer } from 'react';
import Cookies from 'js-cookie';

import { CartItem } from './types';

import { CartContext, cartReducer } from './';

const CartProvider = ({ children, initialCart }: { children: React.ReactNode, initialCart: CartItem[] }) => {
  const [state, dispatch] = useReducer(cartReducer, { 
    cart: initialCart,
    totalProducts: 0,
    orderTotalPrice: 0,
  });

  // Calculates total products count
  useEffect(() => {
    if (state.cart.length > 0) {
      return dispatch({
        type: '[CART] - UPDATE TOTAL PRODUCTS QUANTITY',
        payload: state.cart.map(book => book.quantity).reduce((accumulator, quantity) => (accumulator + quantity))
      });
    }

    dispatch({
      type: '[CART] - UPDATE TOTAL PRODUCTS QUANTITY',
      payload: 0
    });

  }, [state.cart]);

  // Strigify cart cookies data
  useEffect(() => {
    Cookies.set('CART', JSON.stringify(state.cart));
    
  }, [state.cart]);

  // Update order summary
  useEffect(() => {
    const orderTotalPrice = state.cart.reduce((accumulator, product) => {
      return accumulator + (product.price * product.quantity);
    }, 0);

    dispatch({ type: '[CART] - UPDATE ORDER SUMMARY', payload: orderTotalPrice });

  }, [state.cart]);

  const addToCart = (book: Partial<CartItem>) => {
    const productInCart = state.cart.find(cartItem => cartItem.id === book.id);

    if (productInCart) {      
      return dispatch({ 
        type: '[CART] - UPDATE PRODUCT CART QUANTITY', 
        payload: state.cart.map(cartItem => {
          if (cartItem.id !== book.id) return cartItem;

          return {
            ...cartItem,
            quantity: cartItem.quantity + 1
          };
        })
      });
    };

    dispatch({ type: '[CART] - ADD TO CART', payload: book as CartItem });
  };

  const removeFromCart = (id: number) => (
    dispatch({ 
      type: '[CART] - REMOVE FROM CART', 
      payload: state.cart.filter(book => ( book.id !== id)) 
    })
  );

  const updateProductQuantity = (book: CartItem) => (
    dispatch({ 
      type: '[CART] - UPDATE PRODUCT CART QUANTITY', 
      payload: state.cart.map(cartItem => {
        if (cartItem.id !== book.id) return cartItem;

        return book;
      }) 
    })
  );

  const resetCart = () => dispatch({ type: '[CART] - RESET CART' });

  return (
    <CartContext.Provider value={ {
      ...state,

      // Methods
      addToCart,
      removeFromCart,
      updateProductQuantity,
      resetCart
    } }>
      { children }
    </CartContext.Provider>
  );
};

export default CartProvider;
