import products from "../data/products.json";
import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  return (
    <>
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Related Products
        </h2>
        <div className="grid md:grid-cols-4 gap-6 w-full">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
