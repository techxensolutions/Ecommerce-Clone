import { useState } from "react"
import { Minus,Plus, Edit2, Trash2, ChevronDown, ChevronUp, Truck, RefreshCw } from "lucide-react"
const Checkout = () => {
    const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Mamas & Papas Mini Rattle - Lenny Lion",
      price: 8.0,
      quantity: 1,
      image: "/baby-rattle-toy.jpg",
    },
    {
      id: 2,
      name: "Emerald 360 S - Tonal Black",
      price: 299.0,
      quantity: 2,
      image: "/baby-car-seat-black.jpg",
    },
  ])
  const [discountCode, setDiscountCode] = useState("")
  const [showDiscount, setShowDiscount] = useState(false)
  const [showShipping, setShowShipping] = useState(true)
  const [country, setCountry] = useState("United Kingdom")
  const [email, setEmail] = useState("")
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const grandTotal = subtotal
  return (
    <>
    <div className="px-12">

        <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 text-sm text-gray-600 pb-2 border-b">
              <div className="col-span-5">Product Name</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-3 text-center">Qty</div>
              <div className="col-span-2 text-right">Subtotal</div>
            </div>

            {/* Cart Items */}
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-5 flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={"80px"}
                        height={"80px"}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm">{item.name}</span>
                  </div>

                  <div className="col-span-2 text-center font-semibold">£{item.price.toFixed(2)}</div>

                  <div className="col-span-3 flex items-center justify-center gap-2">
                    <button
                      size="icon"
                      className="h-8 w-8 bg-transparent"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center">{item.quantity}</span>
                    <button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-transparent"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="col-span-2 text-right font-semibold">£{(item.price * item.quantity).toFixed(2)}</div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t pt-4">
                  <button className="text-sm text-gray-600 hover:text-gray-900 underline">Gift options</button>
                  <div className="flex gap-2">
                    <button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeItem(item.id)}>
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Gift Cards */}
            <button className="flex items-center gap-2 text-sm text-gray-700 underline py-2">
              <span>Gift Cards</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Discount Code */}
            <div className="bg-white p-4 rounded-lg">
              <button
                className="flex items-center gap-2 text-sm text-gray-700 underline"
                onClick={() => setShowDiscount(!showDiscount)}
              >
                <span>Apply Discount Code</span>
                {showDiscount ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showDiscount && (
                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter discount code"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="flex-1"
                  />
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900">Apply Discount</button>
                </div>
              )}
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>

              {/* Shipping Estimate */}
              <button
                className="flex items-center justify-between w-full text-sm font-medium mb-4 pb-4 border-b"
                onClick={() => setShowShipping(!showShipping)}
              >
                <span>Estimate Shipping and Tax</span>
                {showShipping ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showShipping && (
                <div className="space-y-4 mb-6">
                  <p className="text-sm text-gray-600">Enter your destination to get a shipping estimate.</p>

                  <div>
                    <label className="block text-sm font-medium mb-2">Country</label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full p-2 border rounded-md"
                    >
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>Canada</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">State/Province</label>
                    <input type="text" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Zip/Postal Code</label>
                    <input type="text" />
                  </div>
                </div>
              )}

              {/* Delivery Options */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Delivery</h3>
                <label className="flex items-center gap-2">
                  <input type="radio" name="delivery" defaultChecked />
                  <span className="text-sm">Standard Delivery</span>
                  <span className="ml-auto text-sm font-semibold">£0.00</span>
                </label>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-6 mb-4">
                Proceed to Checkout
              </button>

              <div className="text-center text-sm text-gray-500 mb-4">OR</div>

              {/* Payment Options */}
              <div className="space-y-3">
                <button className="w-full bg-transparent">
                  <img src="/paypal-logo.png" alt="PayPal" width={80} height={24} />
                </button>
                <button className="w-full bg-yellow-50">
                  <span className="text-sm">Pay with</span>
                  <img src="/amazon-logo.png" alt="Amazon" width={60} height={20} className="ml-2" />
                </button>
                <p className="text-xs text-center text-gray-500">Guaranteed delivery wise refund</p>
              </div>

              {/* Totals */}
              <div className="mt-6 pt-6 border-t space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span className="font-semibold">£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Grand Total</span>
                  <span>£{grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

                            </div>
    </>
  )
}

export default Checkout
