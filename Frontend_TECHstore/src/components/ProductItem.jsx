import { useState } from "react";
import StarRating from "./StarRating";

const ProductItem = ({ image, name, price, discount, rating, reviews, specs}) => {
  const [addToCart, setAddToCart] = useState(false);
  const handleCart = () => {
    setAddToCart(!addToCart)
  }

  const sepcsList = () => {
    return specs.map((spec, index) => (
      <span 
        key={index}
        className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium text-[9px] tracking-wide"
      >
        {spec}
      </span>
    ))
  }

  const discountPrice = price ? Math.round(( price - (price * discount / 100) )) : null;

  return (
    <div className="relative w-full h-35 flex bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-out hover:scale-105 overflow-hidden border border-slate-200">

      {/* Image -------------------------------------------------------------*/}
      <div className="relative w-2/4 p-2 bg-white sm:p-3">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-out hover:scale-105" 
        />
      </div>

      {/* Badges ----------------------------------------------------------*/}
      <div className="absolute sm:top-2 sm:left-0 sm:text-xs sm:px-1.5 ">
        <span className="bg-rose-500 text-white text-xs px-2 py-1 rounded-full font-medium tracking-widest uppercase">
          -{discount}%
        </span>
      </div>

      {/* Product info -----------------------------------------------------------*/}
      <div className="w-full flex flex-col p-2 bg-white sm:p-3">
        <div className="flex flex-col gap-1">
          {/* Product Name */}
          <h3 className="text-xs sm:text-sm text-slate-900 font-semibold leading-tight">
            {name}
          </h3>

          {/* Specs */}
          {specs.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {sepcsList()}
            </div>
          )}

          {/* Rating */}
          <div className="flex items-center gap-2">
            <StarRating rating={rating} />
            <span className="text-slate-600 text-xs">{rating.toFixed(1)}</span>
            <span className="text-slate-500 text-xs">
              {`( ${reviews} )`}
            </span>
          </div>


          {/* Price */}
          <div className="flex items-baseline gap-2 mb-1">
            <span 
              style={{ fontFamily: "'Syne', sans-serif" }}
              className="text-slate-900 text-sm font-800 sm:text-lg"
            >
              ${discountPrice}
            </span>
            
            {price && (
              <span className="text-slate-400 text-sm line-through">
                ${price}
              </span>
            )}
          </div>

          {/* Add to cart ------------------------------------*/}
          {/* <button 
            onClick={handleCart}
            className={`
              w-30 rounded-xl py-1.5 font-sm tracking-wide transition-all duration-200 cursor-pointer hover:shadow-md
              ${
              addToCart ? "bg-emerald-500 text-white scale-95" : "bg-indigo-600 text-white scale-95"
              }
            `}
          >
            {addToCart ? "✓ Added" : "Add to Cart"}
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;