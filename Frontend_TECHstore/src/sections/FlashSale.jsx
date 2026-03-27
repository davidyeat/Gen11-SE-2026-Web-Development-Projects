import { Zap, ChevronLeft, ChevronRight } from "lucide-react";
import FlashCartList from "../components/FlashCartList";
import { useState } from "react";

const FlashSale = () => {
  const [index, setIndex] = useState(0);

  // const visibleItems = 4; // Number of items visible in the carousel

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  }

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex + 1));
  }

  // const visibleProducts = DEMO_PRODUCTS.slice(index, index + visibleItems);

  return (
    <section className="mb-6 px-4 mx-auto max-w-7xl" aria-label="Flash Sale Products">
      {/* Section header */}
      <div className="flex items-center justify-between mb-6">
        {/* Section title */}
        <h2  className="flex gap-2">
          <Zap className="text-orange-500"/>
          <span>
            <a href="#" className="text-lg font-bold text-slate-900 hover:text-indigo-600">
              Flash Sale
            </a>
          </span>
        </h2>

        {/* Carousel track */}
        <div className="flex gap-2">
          <button 
            onClick={handlePrev}
            className="w-5 h-5 text-gray-500 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-200">
            <ChevronLeft />
          </button>
          <button 
            onClick={handleNext}
            className="w-5 h-5 text-gray-500 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-200">
            <ChevronRight /> 
          </button>
        </div>
      </div>

      {/* Carousel items*/}
      <div 
        className="grid grid-cols-1 items-center justify-center"
        style={{ transform: `translateX(-${index * 100}%)`, transition: "transform 0.3s ease-in-out" }}>
        <FlashCartList />
      </div>
    </section>
  );

};

export default FlashSale;