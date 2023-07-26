'use client';
import { createContext } from 'react';
import { ContextProps } from './types';

const CatalogContext = createContext({} as ContextProps);

export default CatalogContext;
