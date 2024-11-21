import CartComponent from "./CartComponent";
import FilterComponent from "./FilterComponents";
import SearchComponent from "./SearchComponent";
import SortComponent from "./SortComponent";

export default function FilterContainer() {
  return (
    <div className="mt-10">
      <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="w-full">
          <SortComponent />

          <FilterComponent />
        </div>
        <div className="flex gap-2 items-center">
          <SearchComponent />
          <CartComponent />
        </div>
      </div>
    </div>
  );
}
