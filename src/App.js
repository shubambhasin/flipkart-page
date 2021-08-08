import { Navbar } from "./components/Navbar/Navbar";
import "./styles.css";
import { ProductPage } from "../src/components/productpage/ProductPage";
import { useProduct } from "./context/ProductContext";
import { Saved } from "./components/saved/Saved";
import { Cart } from "./components/cart/Cart";
export default function App() {
  const { page, setPage } = useProduct();

  return (
    <div className="App">
      <Navbar />
      {page === "products" && <ProductPage />}
      {page === "saved" && <Saved />}
      {page === "cart" && <Cart />}
    </div>
  );
}
