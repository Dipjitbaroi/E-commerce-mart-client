import { useEffect, useRef, useState } from "react";
import ArrowDown from "../../assets/svg/ArrowDown";
import { useCategoryContext } from "../../provider/CategoriesContextProvider";
export default function FilterComponent() {
  const [openFilter, setOpenFilter] = useState(false);
  const contentRef = useRef(null);
  const btnRef = useRef(null);

  const { allCategories, selectCategory, onCategoryChange } =
    useCategoryContext();

  const handleClickOutside = (event) => {
    if (
      contentRef.current &&
      !contentRef.current.contains(event.target) &&
      !btnRef.current.contains(event.target)
    ) {
      setOpenFilter(false);
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
      <div>
        <button
          ref={btnRef}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          onClick={() => setOpenFilter(!openFilter)}
        >
          Filter
          <div className={`${openFilter && "rotate-180"}`}>
            <ArrowDown />
          </div>
        </button>
      </div>
      {openFilter && (
        <div
          ref={contentRef}
          className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
        >
          <div className="py-1" role="none">
            {allCategories?.map((category) => (
              <label
                key={category}
                className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
              >
                <input
                  checked={selectCategory === category}
                  type="checkbox"
                  className="form-checkbox h-4 w-4"
                  id="filter-option-1"
                  onChange={() => onCategoryChange(category)}
                />
                <span className="ml-2">{category}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
