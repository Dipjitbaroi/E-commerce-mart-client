import { useContext } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../context";
import useLocalStorage from "../hooks/useLocalStorage";
export const useCartContext = () => {
  const contextValue = useContext(CartContext);
  return contextValue;
};
export default function CartContextProvider({ children }) {
  const [cart, setCart] = useLocalStorage("cartItems", []);
  const handleAddOrRemoveFromCart = (productId) => {
    const index = cart?.indexOf(productId);
    if (index === -1) {
      setCart([...cart, productId]);
      toast.success("Add to Cart Successfully");
    } else {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
      toast.success("Remove to Cart Successfully");
    }
  };
  return (
    <CartContext.Provider value={{ cart, handleAddOrRemoveFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
