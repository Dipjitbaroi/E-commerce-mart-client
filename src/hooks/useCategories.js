import { useEffect, useState } from "react";
const useCategories = () => {
  const [allCategories, setCategories] = useState([]);

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        setLoading({
          state: true,
          message: "Fetching category data...",
        });

        const response = await fetch(
          `https://fakestoreapi.com/products/categories`
        );

        if (!response.ok) {
          const errorMessage = `Fetching category data failed: ${response.status}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading({
          state: false,
          message: "",
        });
      }
    };
    fetchCategoriesData();
  }, []);

  return {
    allCategories,
    loading,
    error,
  };
};
export default useCategories;
