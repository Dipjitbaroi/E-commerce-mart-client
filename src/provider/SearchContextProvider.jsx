import { useContext, useState } from "react";
import { SearchContext } from "../context";
import { useProductContext } from "./ProductContextProvider";
export const useSearchContext = () => {
  const contextValue = useContext(SearchContext);
  return contextValue;
};
export default function SearchContextProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const { allProducts } = useProductContext();
  const searchedResult = allProducts?.filter((product) =>
    product.title?.toLowerCase()?.includes(searchValue?.toLowerCase())
  );
  const displayProducts = searchedResult;

  return (
    <SearchContext.Provider value={{ displayProducts, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
}
