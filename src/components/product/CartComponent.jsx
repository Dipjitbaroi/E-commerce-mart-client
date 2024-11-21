import CartSvg from "../../assets/svg/CartSvg";
import { useCartContext } from "../../provider/CartContextProvider";

export default function CartComponent() {
  const { cart } = useCartContext();
  return (
    <div className="flow-root">
      <a href="#" className="group -m-2 flex items-center p-2">
        <CartSvg />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {cart?.length}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </a>
    </div>
  );
}
