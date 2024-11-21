import { useState } from "react";
import SearchSvg from "../../assets/svg/searchSvg";
import useDebounce from "../../hooks/useDebounce";
import { useSearchContext } from "../../provider/SearchContextProvider";
export default function SearchComponent() {
  const { setSearchValue } = useSearchContext();
  const [search, setSearch] = useState("");
  const doSearch = useDebounce((value) => {
    setSearchValue(value);
  }, 500);
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    doSearch(e.target.value);
  };
  return (
    <div className="flex flex-1 items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:!ring-2 ring-inset focus-within:!ring-teal-500 rounded-md">
      <SearchSvg />
      <input
        className="block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none placeholder:text-sm sm:text-sm sm:leading-6"
        placeholder="Find anything..."
        aria-label="Search components"
        id="headlessui-combobox-input-:r5n:"
        role="combobox"
        type="text"
        aria-expanded="false"
        aria-autocomplete="list"
        value={search}
        style={{ caretColor: "rgb(107, 114, 128)" }}
        onChange={handleSearchChange}
      />
    </div>
  );
}
