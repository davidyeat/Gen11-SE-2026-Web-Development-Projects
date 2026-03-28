import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import FlashSale from "./sections/FlashSale.jsx";
import ProductSection from "./sections/ProductSection.jsx";
import ProductShowcase from "./components/ProductShowcase.jsx";
import Category from "./sections/Category.jsx";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />
      <main className="pt-16">
        {/* Content will go here based on the page state */}
        <Home />
        <Category />
        <FlashSale />
        <ProductSection />
      </main>
    </>
  );
}

export default App;
