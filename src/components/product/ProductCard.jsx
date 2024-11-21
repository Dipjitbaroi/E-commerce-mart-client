import removeFromCart from "../../assets/icons/remove-from-cart.png";
import CartSvg from "../../assets/svg/CartSvg";
import { useCartContext } from "../../provider/CartContextProvider";
export default function ProductCard({ title, image, category, price, id }) {
  const { handleAddOrRemoveFromCart, cart } = useCartContext();

  const isCartExist = cart?.find((item) => item === id);
  return (
    <div className="relative border rounded-md w-full h-full flex flex-col justify-between">
      <div>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
          <img
            src={image}
            alt="Front of men&#039;s Basic Tee in black."
            className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
          />
        </div>
        <div className="mt-4 px-3 pb-4">
          <div>
            <h3 className="text-sm text-gray-700">{title}</h3>
            <p className="mt-1 text-sm text-gray-500">{category}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${price}</p>
        </div>
      </div>
      <button
        onClick={() => handleAddOrRemoveFromCart(id)}
        className={`cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1   hover:ring-1 ring-slate-700/10  hover:text-slate-900 items-center text-center mb-3 mx-3 hover:bg-slate-50`}
      >
        {!isCartExist ? (
          <div className="flex px-3 py-2 justify-center">
            <CartSvg />
            Add To Cart
          </div>
        ) : (
          <div className="flex px-3 py-2 justify-center items-center gap-3 text-red-500">
            <img
              className="w-4 h-4"
              src={removeFromCart}
              alt="removeFromCart"
            />
            Remove from Cart
          </div>
        )}
      </button>
    </div>
  );
}
