import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import FlashSale from "./sections/FlashSale.jsx";
import ProductSection from "./sections/ProductSection.jsx";
import ProductShowcase from "./components/ProductShowcase.jsx";

function App() {
  const [, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />
      <main className="pt-16">
        {/* Content will go here based on the page state */}
        <Home />
        <FlashSale />
        {/* <ProductSection /> */}
        {/* <ProductShowcase /> */}
      </main>
    </>
  );
}

export default App;
