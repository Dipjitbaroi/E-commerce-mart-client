import Page from "./page";
import CartContextProvider from "./provider/CartContextProvider";
import CategoriesContextProvider from "./provider/CategoriesContextProvider";
import ProductContextProvider from "./provider/ProductContextProvider";
import SearchContextProvider from "./provider/SearchContextProvider";

function App() {
  return (
    <CategoriesContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <SearchContextProvider>
            <Page />
          </SearchContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </CategoriesContextProvider>
  );
}

export default App;
