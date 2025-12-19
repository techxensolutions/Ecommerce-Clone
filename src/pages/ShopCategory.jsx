import { useParams } from "react-router-dom"
import ShopHero from "../components/ShopHero"
import Filtersbar from "../components/Filtersbar";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json"
const ShopCategory = () => {
  const {categoryName} = useParams();
  return (
    <>
    <ShopHero category={categoryName}/>
    <div className="flex gap-8 mx-12">
          <Filtersbar/>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span>Sort By:</span>
                <select className="border rounded px-3 py-1">
                  <option>Product Name</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard product={product}/>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <p className="text-sm text-gray-600 mb-4">Showing 1-9 of 208</p>
              <button className="bg-gray-700 hover:bg-gray-800 px-16 text-white font-semibold p-4 rounded-full">Load More</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default ShopCategory
