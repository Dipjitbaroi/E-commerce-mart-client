import { createContext } from "react";
const ProductContext = createContext({
  allProducts: [],
  loading: { state: false, message: "" },
  error: null,
});

const CategoriesContext = createContext({
  allCategory: [],
  loading: { state: false, message: "" },
  error: null,
});

const CartContext = createContext();
const SearchContext = createContext();

export { CartContext, CategoriesContext, ProductContext, SearchContext };
