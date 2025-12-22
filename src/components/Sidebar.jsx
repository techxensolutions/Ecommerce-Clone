import { X, Minus,Plus } from "lucide-react"
import { useState } from "react"
import SidebarItem from "./SidebarItem"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Sidebar = ({isOpen, onClose}) => {
  const {products, totalPrice}=useSelector((state)=>state.cart);
  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-[#4a5568] text-white px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">My cart</h2>
          <button
            onClick={onClose}
            className="hover:bg-white/10 rounded-sm p-1 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col h-[calc(100%-72px)] overflow-y-auto">
          <div className="flex-1 px-6 py-6">
            {products.length === 0 ? (
              <p className="text-muted-foreground text-center py-12">Your cart is empty</p>
            ) : (
              <div className="space-y-6">
                {products.map((item) => (
                  <SidebarItem key={item._id} item={item}/>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {products.length > 0 && (
            <div className="border-t px-6 py-6 bg-white">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">Cart subtotal:</span>
                <span className="text-xl font-bold">£{totalPrice.toFixed(2)}</span>
              </div>

              {/* View Cart Link */}
              <div className="text-center mb-4">
                <Link to="/checkout/cart" className="text-sm underline hover:no-underline">
                  View and Edit Cart
                </Link>
              </div>

              {/* Checkout Button */}
              <Link to={"/checkout"}
                className="block text-center w-full bg-[#fdb515] hover:bg-[#e5a313] text-white text-lg font-semibold py-3 rounded-full mb-4"
              >
                Go to Checkout
              </Link>

              {/* OR Divider */}
              <div className="text-center text-sm text-muted-foreground mb-4">OR</div>

              {/* PayPal Button */}
              <button className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white rounded-md h-12 flex items-center justify-center mb-3 transition-colors">
                <img src="/images/paypal.png" alt="" />
              </button>

              {/* Amazon Pay Button */}
              <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-gray-800 rounded-md h-12 flex items-center justify-center gap-2 font-semibold transition-colors mb-2">
                <span>Pay with</span>
                <img src="/images/amazonpay.svg" width={30} height={"auto"} alt="" />
                <span>→</span>
              </button>

              <p className="text-xs text-center text-muted-foreground">Guaranteed delivery else refund</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Sidebar
