import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Product } from "./pages/Product";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
