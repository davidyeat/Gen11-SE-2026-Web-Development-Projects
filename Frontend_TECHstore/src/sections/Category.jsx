import { CATEGORIES } from "../data/demoData";
import { Sparkle } from "lucide-react";

const Category = () => {
  return (
    <section className="mb-6 px-4 mx-auto max-w-7xl p-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-out border border-slate-200" aria-label="Categories Products">
      {/* Section header */}
      <div className="flex items-center justify-between mb-6">
        {/* Section title */}
        <h2  className="flex gap-2">
          <Sparkle strokeWidth={1.25} className="text-violet-600"/>
          <span>
            <a href="#" className="text-lg font-bold text-slate-900 hover:text-indigo-600">
              Shop By Categories
            </a>
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:grid-cols-4">
        {CATEGORIES.map((category, index) => (
          <a 
            href="#" className="flex flex-col items-center justify-center bg-white shadow-xl py-3 rounded-md hover:shadow-xl hover:scale105 "
            key={index}
          >
            <div className="flex items-center justify-center w-12 h-12 mb-2">
              <img 
                src={category.image}
                alt={category.name} 
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-xs font-semibold text-slate-700">
              {category.name}
            </span>
            <span>
              {category.quantity} items
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Category;