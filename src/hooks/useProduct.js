import { useEffect, useState } from "react";
import { useCategoryContext } from "../provider/CategoriesContextProvider";
const useProduct = () => {
  const [allProducts, setProducts] = useState([]);
  const { selectCategory } = useCategoryContext();

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async (url) => {
      try {
        setLoading({
          state: true,
          message: "Fetching product data...",
        });

        const response = await fetch(url);

        if (!response.ok) {
          const errorMessage = `Fetching product data failed: ${response.status}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading({
          state: false,
          message: "",
        });
      }
    };
    if (selectCategory) {
      fetchProductData(
        `https://fakestoreapi.com/products/category/${selectCategory}`
      );
    } else {
      fetchProductData("https://fakestoreapi.com/products");
    }
  }, [selectCategory]);
  return {
    allProducts,
    setProducts,
    error,
    loading,
  };
};
export default useProduct;
