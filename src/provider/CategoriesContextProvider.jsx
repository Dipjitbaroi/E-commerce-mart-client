import { useContext, useState } from "react";
import { CategoriesContext } from "../context";
import useCategories from "../hooks/useCategories";
export const useCategoryContext = () => {
  const contextValue = useContext(CategoriesContext);
  return contextValue;
};
export default function CategoriesContextProvider({ children }) {
  const { allCategories, loading, error } = useCategories();
  const [selectCategory, setSelectCategory] = useState("");
  const onCategoryChange = (category) => {
    const isExist = selectCategory === category;

    setSelectCategory(isExist ? "" : category);
  };
  return (
    <CategoriesContext.Provider
      value={{ allCategories, selectCategory, onCategoryChange }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
