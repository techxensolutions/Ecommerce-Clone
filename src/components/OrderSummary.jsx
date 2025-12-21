import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import OrderSummaryItem from "./OrderSummaryItem";

const OrderSummary = () => {
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(true);
  const {products,totalPrice}=useSelector((state)=>state.cart);
  return (
    <>
      <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-slate-600 text-white rounded-t-lg">
              <button
                onClick={() => setIsOrderSummaryOpen(!isOrderSummaryOpen)}
                className="w-full flex items-center justify-between p-6"
              >
                <h2 className="text-xl font-semibold">Order Summary</h2>
                <ChevronUp
                  className={`transition-transform ${
                    isOrderSummaryOpen ? "" : "rotate-180"
                  }`}
                />
              </button>

                  <div className="px-6 pb-4">
                    <p className="text-slate-300">1 Item in Cart</p>
                  </div>

                  <div className="bg-white text-slate-700 p-6">
              {isOrderSummaryOpen && (
                products.map((item)=>{

                    return <OrderSummaryItem item={item}/>
                })
              )}
                    <div className="pb-4">
                      <div className="flex justify-between items-center text-lg font-semibold">
                        <span>Order Total</span>
                        <span>£{totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default OrderSummary
