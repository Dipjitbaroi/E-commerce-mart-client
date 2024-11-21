import { useContext } from "react";
import { ProductContext } from "../context";
import useProduct from "../hooks/useProduct";
export const useProductContext = () => {
  const contextValue = useContext(ProductContext);
  return contextValue;
};
const ProductContextProvider = ({ children }) => {
  const { allProducts, setProducts, error, loading } = useProduct();

  const handleSortProducts = (sort) => {
    switch (sort) {
      case "HTL":
        setProducts([...allProducts].sort((a, b) => b.price - a.price));
        break;
      case "LTH":
        setProducts([...allProducts].sort((a, b) => a.price - b.price));
        break;
      default:
        break;
    }
  };

  return (
    <ProductContext.Provider
      value={{ allProducts, error, loading, handleSortProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
