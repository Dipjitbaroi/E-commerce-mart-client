import { useEffect, useRef, useState } from "react";
import ArrowDown from "../../assets/svg/ArrowDown";
import { useProductContext } from "../../provider/ProductContextProvider";
export default function SortComponent() {
  const [openSort, setOpenSort] = useState(false);
  const contentRef = useRef(null);
  const btnRef = useRef(null);

  const { handleSortProducts } = useProductContext();

  const handleClickOutside = (event) => {
    if (
      contentRef.current &&
      !contentRef.current.contains(event.target) &&
      !btnRef.current.contains(event.target)
    ) {
      setOpenSort(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative inline-block text-left">
      <button
        ref={btnRef}
        type="button"
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
        onClick={() => setOpenSort(!openSort)}
      >
        Sort
        <div className={`${openSort && "rotate-180"}`}>
          <ArrowDown />
        </div>
      </button>
      {openSort && (
        <div
          ref={contentRef}
          className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <span
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
              onClick={() => handleSortProducts("HTL")}
            >
              Low to High
            </span>
            <span
              href=""
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
              onClick={() => handleSortProducts("LTH")}
            >
              High to Low
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
