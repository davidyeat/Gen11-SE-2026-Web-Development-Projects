import FlashCartProduct from "./FlashCartProduct";
import { DEMO_PRODUCTS } from "../data/demoData";

const FlashCartList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mx-auto max-w-7xl" aria-label="Flash Sale Cart List">
      {/* Product details will go here */}
      {DEMO_PRODUCTS.map((cart) => (
        <FlashCartProduct
          key={cart.id}
          image={cart.image}
          name={cart.name}
          brand={cart.brand}
          category={cart.category}
          price={cart.price}
          discount={cart.discount}
          rating={cart.rating}
          reviews={cart.reviews}
          specs={cart.specs}
          stock={cart.stock}
        />
      ))};
    </div>
  );
};

export default FlashCartList;