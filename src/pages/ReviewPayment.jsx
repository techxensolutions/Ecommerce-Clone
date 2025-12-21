import { ChevronRight, ChevronUp, Pencil } from "lucide-react"
import PaymentMethod from "../components/PaymentMethod"

const ReviewPayment = () => {
    
  return (
    <>
     <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Payment Methods */}
          <PaymentMethod/>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-slate-600 rounded-lg p-6 text-white sticky top-4">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              {/* Price Details */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Cart Subtotal</span>
                  <span>£8.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <div>Shipping</div>
                    <div className="text-xs opacity-90">Delivery - Standard Delivery</div>
                  </div>
                  <span>£7.50</span>
                </div>
              </div>

              {/* Order Total */}
              <div className="border-t border-slate-500 pt-4 mb-4">
                <div className="flex justify-between text-xl font-semibold">
                  <span>Order Total</span>
                  <span>£15.50</span>
                </div>
              </div>

              {/* Cart Items */}
              <div className="border-t border-slate-500 pt-4">
                <button className="flex items-center justify-between w-full text-left mb-4">
                  <span className="text-sm">1 Item in Cart</span>
                  <ChevronUp className="w-4 h-4" />
                </button>

                <div className="bg-white rounded-lg p-4 text-gray-700">
                  <div className="flex gap-4">
                    <img src="/baby-rattle-toy-lion.jpg" alt="Product" width={80} height={80} className="rounded" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">Mamas & Papas Mini Rattle - Lenny Lion</h4>
                      <p className="text-sm font-semibold mb-1">£8.00</p>
                      <p className="text-sm text-gray-600">Qty: 1</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ship To */}
              <div className="border-t border-slate-500 pt-4 mt-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm font-semibold">Ship To:</h3>
                  <Pencil className="w-4 h-4 cursor-pointer" />
                </div>
                <div className="text-sm space-y-1 opacity-90">
                  <p>Muhammad Hammad</p>
                  <p>hammad</p>
                  <p>santpura, vgsrt</p>
                  <p>new york, 38000</p>
                  <p>United Kingdom</p>
                  <p>+923237890191</p>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="border-t border-slate-500 pt-4 mt-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-semibold mb-1">Shipping Method:</h3>
                    <p className="text-sm opacity-90">Delivery - Standard Delivery</p>
                  </div>
                  <Pencil className="w-4 h-4 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default ReviewPayment
