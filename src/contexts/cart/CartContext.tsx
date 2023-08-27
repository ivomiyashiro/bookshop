'use client';
import { createContext } from 'react';
import { ContextProps } from './types';

const CartContext = createContext({} as ContextProps);

export default CartContext;
