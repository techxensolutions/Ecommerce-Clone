import { useParams } from "react-router-dom"
import Gallery from "../components/Gallery"
import ProductDetails from "../components/ProductDetails"
import RelatedProducts from "../components/RelatedProducts"
import images from "../data/product_images.json"
import products from "../data/products.json"
const CategoryProduct = () => {
  const {productName}=useParams();
  const product=products.find(prod=>prod.name===productName.replaceAll("_"," "));
  return (
    <>
    <div className="container mx-auto px-4 py-8">

    <div className="grid lg:grid-cols-2 gap-12">

      <Gallery images={images}/>
      <ProductDetails product={product}/>
    </div>
      <RelatedProducts/>
    </div>
    </>
  )
}

export default CategoryProduct
