import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import HeroSection from "./components/hero/HeroSection";
import Navbar from "./components/Navbar";
import ProductContainer from "./components/product/ProductContainer";
export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductContainer />
      <Footer />
      <ToastContainer />
    </>
  );
}
