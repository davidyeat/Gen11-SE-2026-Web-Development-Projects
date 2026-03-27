import ProductShowcase from "../components/ProductShowcase";
import { Award, Star, TrendingUp } from "lucide-react";
import { FEATURED_PRODUCTS  ,LATEST_PRODUCTS, BEST_SELLERS } from "../data/demoData";

const featuredIcon = <Star strokeWidth={1.25} className="w-5 h-5 text-violet-500"/>
const latestSellerIcon = <TrendingUp strokeWidth={1.25} className="w-5 h-5 text-indigo-500"/>
const bestSellerIcon = <Award strokeWidth={1.25} className="w-5 h-5 text-amber-500"/>

const ProductSection = () => {
  return (
    <div className="mb-6 px-4 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:gap-6">
      <ProductShowcase title="Featured Products" icon={featuredIcon} data={FEATURED_PRODUCTS} />
      <ProductShowcase title="Latest Sellers" icon={latestSellerIcon} data={LATEST_PRODUCTS} />
      <ProductShowcase title="Best Sellers" icon={bestSellerIcon} data={BEST_SELLERS} />
    </div>
  )
}

export default ProductSection;