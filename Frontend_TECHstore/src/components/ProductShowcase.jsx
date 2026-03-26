import { useState } from "react";
import StarRating from "./StarRating";

const ProductShowcase = ({ image, name, price, discount, rating, reviews, specs }) => {
  const [addToCart, setAddToCart] = useState(false);
  const handleCart = () => {
    setAddToCart(!addToCart)
  }

  const sepcsList = () => {
    return specs.map((spec, index) => (
      <span 
        key={index}
        className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium text-xs"
      >
        {spec}
      </span>
    ))
  }

  const discountPrice = price ? Math.round(( price - (price * discount / 100) )) : null;

  return (
    <div className="">
      {/* Image -------------------------------------------------------------*/}
      <div className="">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110" 
        />

        {/* Badges ----------------------------------------------------------*/}
        <div className="">
          <span className="bg-rose-500 text-white text-xs px-2.5 py-0.5 rounded-full font-medium tracking-widest uppercase">
            {discount}% OFF
          </span>
        </div>

        {/* Product Info ----------------------------------------------------*/}
        <div className="">
          {/* Product Name */}
          <h3 className="text-slate-900 font-semibold text-base leading-tight">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <StarRating rating={rating} />
            <span className="text-slate-600 text-xs">{rating.toFixed(1)}</span>
            <span className="text-slate-500 text-xs">
              {`( ${reviews} )`}
            </span>
          </div>

          {/* Specs */}
          {specs.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {sepcsList()}
            </div>
          )}
        </div>

        {/* Product Price and Add to cart ------------------------------------*/}
        <div className="">
          {/* Price */}
          <div className="flex items-baseline gap-2 mb-3">
            <span 
              style={{ fontFamily: "'Syne', sans-serif" }}
              className="text-slate-900 text-xl font-800"
            >
              ${discountPrice}
            </span>
            
            {price && (
              <span className="text-slate-400 text-sm line-through">
                ${price}
              </span>
            )}
          </div>

          {/* Add to cart button */}
          <button 
            onClick={handleCart}
            disabled={!stock}
            className={`
              flex-1 rounded-xl py-1.5 font-medium tracking-wide transition-all duration-200 
              ${
                !stock ? "bg-slate-200 text-slate-400 cursor-not-allowed" : 
                addToCart ? "bg-emerald-500 text-white scale-95" : "bg-indigo-600 text-white scale-95"
              }
            `}
          >
            {addToCart ? "✓ Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductShowcase;