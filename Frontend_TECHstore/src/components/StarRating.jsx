import { Star, StarHalf } from "lucide-react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((s) => {
        const filled = rating >= s;
        const half = !filled && rating >= s - 0.5;

        return filled ? (
          <Star 
            key={s} 
            className="w-3.5 h-3.5 text-amber-300 fill-amber-300" 
          />
        ) : half ? (
          <StarHalf  
            key={s} 
            className="w-3.5 h-3.5 text-amber-300 fill-amber-300" 
          />) : (
          <Star 
            key={s} 
            className="w-3.5 h-3.5 text-gray-300" 
          />
        );
      })}
    </div>
  );
};

export default StarRating;