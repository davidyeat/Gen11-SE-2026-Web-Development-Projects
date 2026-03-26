import { Zap, ChevronLeft, ChevronRight } from "lucide-react";
import FlashCartList from "../components/FlashCartList";

const FlashSale = () => {
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
          <button className="w-5 h-5 text-gray-500 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-200">
            <ChevronLeft />
          </button>
          <button className="w-5 h-5 text-gray-500 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-200">
            <ChevronRight /> 
          </button>
        </div>
      </div>

      {/* Carousel items*/}
      <div className="grid grid-cols-1 items-center justify-center">
        <FlashCartList />
      </div>
    </section>
  );

};

export default FlashSale;