import ProductItem from "./ProductItem";

const ProductShowcase = ({ icon, title, data }) => {
  return (
    <div className="p-2 bg-white rounded-lg shadow-md sm:p-4">
      {/* Title section */}
      <h2 className="flex items-center gap-2 text-slate-900 font-semibold text-lg mb-2">
        {icon}
        <span>{title}</span>
      </h2>

      {/* Product Items */}
      <div className="flex flex-col overflow-hidden gap-2 ">
        {data.map((product) => (
          <ProductItem 
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            discount={product.discount}
            rating={product.rating}
            reviews={product.reviews}
            specs={product.specs}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductShowcase;