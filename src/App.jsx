import { BrowserRouter, Routes, Route } from "react-router-dom";
import("preline");
import "./App.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import LandingPage from "./components/Everything/LandingPage";
import Product_Page from "./components/Product_page/Product_Page";
import Cart from "./components/cart/Cart";

// import Category from "./components/categories/Category";
import CheckoutPage from "./components/cart/CheckoutPage";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>         
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/landing/checkout" element={<CheckoutPage />} />
            <Route path="/landing/product/:id" element={<Product_Page />} />
            <Route path="/landing/category/:category" element={<LandingPage />} />
            <Route path="/landing/cart" element={<Cart />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
