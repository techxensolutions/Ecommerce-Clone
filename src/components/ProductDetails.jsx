import { ChevronDown, MessageCircle } from "lucide-react"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addProduct } from "../store/cartSlice";
const ProductDetails = ({product}) => {
    const [expandedSection, setExpandedSection] = useState("description");
    const dispatch=useDispatch();
  return (
    <>
     <div>
            <h1 className="text-3xl font-bold mb-2">Tripp Trapp® Tray - Grey</h1>
            <p className="text-sm text-muted-foreground mb-6">
              by <span className="underline cursor-pointer">Stokke - Tripp Trapp</span>
            </p>

            <div className="text-3xl font-bold mb-6">£63.00</div>

            <button onClick={()=>dispatch(addProduct(product))} className="w-full h-12 bg-[#FFA500] rounded-full hover:bg-[#FF8C00] text-white font-semibold mb-3">
              ADD TO CART
            </button>

            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-2">Or pay with:</p>
              <button
                variant="outline"
                className="w-full h-12 border-[#FFA500] text-foreground hover:bg-muted bg-transparent"
              >
                Pay with <span className="font-bold ml-1">amazon</span>
              </button>
              <p className="text-xs text-muted-foreground mt-2 text-center">Download delivery date offered</p>
            </div>

            {/* Expandable Sections */}
            <div className="space-y-2">
              <div className="border-t pt-4">
                <button
                  onClick={() => setExpandedSection(expandedSection === "description" ? null : "description")}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="font-semibold">Product Description</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${expandedSection === "description" ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedSection === "description" && (
                  <div className="mt-4 text-sm text-muted-foreground space-y-3">
                    <p className="font-semibold text-foreground">Product SKU: 704035428046</p>
                    <p>
                      The Stokke™ Tray turns your Tripp Trapp® into a stand-alone high chair. Perfect for quick feedings
                      or crowded tables, the Scandinavian designed Stokke™® Tray's clean lines complement the Tripp
                      Trapp® for a unique, modern look.
                    </p>
                    <button className="text-foreground underline">See more</button>
                  </div>
                )}
              </div>

              <div className="border-t pt-4">
                <button
                  onClick={() => setExpandedSection(expandedSection === "delivery" ? null : "delivery")}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="font-semibold">Delivery Information</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${expandedSection === "delivery" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              <div className="border-t pt-4">
                <button
                  onClick={() => setExpandedSection(expandedSection === "reviews" ? null : "reviews")}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="font-semibold">Customer Reviews</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${expandedSection === "reviews" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            </div>

            {/* Chat Button */}
            <button className="fixed bottom-8 right-8 bg-[#00B67A] hover:bg-[#009960] text-white rounded-full p-4 shadow-lg">
              <MessageCircle className="w-6 h-6" />
            </button>
          </div> 
    </>
  )
}

export default ProductDetails
