import { useState } from "react";
import { Heart } from "lucide-react";
import StarRating from "./StarRating";

const FlashCartProduct = ({image, name, brand, category, price, discount, rating, reviews, specs, stock}) => {
  const [wishlist, setWishlist] = useState(false);
  const [addToCart, setAddToCart] = useState(false);

  // Function ------------------------------------------------------------------
  const handleWishlist = () => {
    setWishlist(!wishlist);
  }

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
    <div style={{fontFamily: "'DM Sans', sans-serif"}} className="relative flex flex-col bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1.5 overflow-hidden border border-slate-200 max-w-sm w-full">
      {/* Image -------------------------------------------------------------*/}
      <div className="relative overflow-hidden bg-slate-50 h-52">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110" 
        />

        {/* Badges ----------------------------------------------------------*/}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className="bg-indigo-600 text-white text-xs px-2.5 py-0.5 rounded-full font-medium tracking-widest uppercase">
            {category}
          </span>
          <span className="bg-rose-500 text-white text-xs px-2.5 py-0.5 rounded-full font-medium tracking-widest uppercase">
            {discount}% OFF
          </span>
        </div>

        {/* Wishlist --------------------------------------------------------*/}
        <button 
          onClick={handleWishlist}
          className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-200"
          aria-label="wishlist"
        >
          <Heart className={`w-5 h-5 ${wishlist ? "text-red-600 fill-red-600" : "text-gray-500"}`} />
        </button>

        {/* Stock pill --------------------------------------------------------*/}
        {!stock && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center">
            <span 
              style={{fontFamily: "'Syne', sans-serif"}}
              className="bg-slate-800 px-4 py-1.5 text-white text-xs font-700 rounded-full tracking-widest uppercase"
            >
              Out of Stock
            </span>
          </div>
        )}
      </div>


      {/* Body --------------------------------------------------------------*/}
      <div className="flex flex-col flex-1 p-4 gap-2.5">
        {/* Brand */}
        <p className="text-indigo-500 font-medium text-xs tracking-wide uppercase">
          {brand}
        </p>

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

        {/* Divider */}
        <div className="border-t border-slate-200 mt-auto pt-3">
          {/* Product Price */}
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

            {/* Stock */}
            {stock && (
            <span className="ml-auto text-emerald-600 text-xs font-medium flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
              In stock
            </span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 border border-indigo-600 text-indigo-600 rounded-xl py-1.5 font-medium tracking-wide hover:bg-indigo-50 transition-colors duration-200">
            View Detail
          </button>
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
  )
};

export default FlashCartProduct;