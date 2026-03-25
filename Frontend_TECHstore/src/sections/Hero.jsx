import Button from "../components/Button";
import States from "../components/Stats";

const Hero = () => {
    const variants = {
    shopNow: "px-8 py-4 rounded-2xl font-bold text-white text-lg hover:scale-105 bg-linear-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-300 transition-all",
    browseCategories: "px-8 py-4 rounded-2xl font-bold border-2 text-lg transition-all hover:scale-105 border border-blue-500 text-blue-500 bg-transparent",
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-12 items-center w-full">
      {/* Left Side ---------------------------------------------------------*/}
      <div>
        <div 
          className="inline-flex items-center gap-2 py-2 px-4 rounded-full text-md font-semibold mb-6"
          style={{ background: "#dbeafe", color: "#3b82f6" }}
        >
          <span>The Future of Tech Shopping</span>
        </div>
        <h1 
          className="text-5xl md:text-7xl font-bold leading-none mb-6" 
          style={{ color: "#111827" }}  
        >
          Next-Gen <br />
          <span 
            style={{ background:  "linear-gradient(135deg, #3b82f6, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Technology
          </span> <br />
          Starts Here.
        </h1>
        <p
          className="max-w-2xl text-lg/7 font-medium text-pretty text-gray-600 dark:text-gray-400"
        >
          Discover the latest laptops, smartphones, gaming gear, and smart devices. 
          Professional quality, student-friendly prices.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <Button name="Shop Now →" className={variants.shopNow} />
          <Button name="Browse Categories" className={variants.browseCategories} />
        </div>
        <div className="flex flex-wrap gap-8">
          <States title="500+" description="Products" />
          <States title="50K+" description="Customers" />
          <States title="4.8★" description="Rating" />
        </div>
      </div>

      {/* Right Side --------------------------------------------------------*/}
      <div className="">

      </div>
    </section>
  );
};

export default Hero;