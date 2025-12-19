import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <>
      <Link to={`/product/${product.name.replaceAll(' ','_')}`} className="block rounded-lg hover:shadow-lg transition-shadow">
        <div className="relative mb-4">
          <img
            src={product.image}
            alt={product.name}
            height={"240"}
            width={"240"}
            className="w-full object-cover rounded"
          />
          <span
            className={`absolute bottom-2 left-2 ${product.outOfStock!==true ? 'bg-yellow-400' : 'bg-gray-400'} text-white text-xs px-2 py-1 rounded`}
          >
            {product.outOfStock!==true ? 'In Stock' : 'Out of Stock'}
          </span>
          <button className="absolute bottom-2 right-2">
            <Heart className="w-5 h-5" />
          </button>
        </div>
        <h3 className="mb-2 line-clamp-2">{product.name}</h3>
        <p className="font-bold text-lg text-gray-500">£{product.price.toFixed(2)}</p>
      </Link>
    </>
  );
};

export default ProductCard;
