import { useState } from "react";
import { ChevronUp } from "lucide-react";

const PaymentMethod = () => {
    const [payment, setPayment] = useState("revolut");
  return (
    <>
     <div className="space-y-6">
            {/* Payment Method Section */}
            <div className="bg-white rounded-lg p-6 space-y-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-6">Payment Method</h2>

      {/* Revolut Pay */}
      <div className="flex items-center gap-3 pb-4 border-b border-b-gray-500">
        <input
          type="radio"
          name="payment"
          id="revolut"
          value="revolut"
          checked={payment === "revolut"}
          onChange={(e) => setPayment(e.target.value)}
        />
        <label htmlFor="revolut" className="flex items-center gap-3 cursor-pointer flex-1">
          <span className="text-gray-700">Revolut Pay</span>
          <div className="flex items-center gap-2">
            <img src="/images/revolut.svg" alt="Revolut" width={40} height={20} />
            <img src="/images/mastercard.svg" alt="Mastercard" width={30} height={20} />
            <img src="/images/visa.svg" alt="Visa" width={30} height={20} />
            <img src="/images/amex.svg" alt="Amex" width={30} height={20} />
          </div>
        </label>
      </div>

      {/* Credit Card (Revolut) */}
      <div className="flex items-center gap-3 pb-4 border-b border-b-gray-500">
        <input
          type="radio"
          name="payment"
          id="credit-card"
          value="credit-card"
          checked={payment === "credit-card"}
          onChange={(e) => setPayment(e.target.value)}
        />
        <label htmlFor="credit-card" className="flex items-center gap-3 cursor-pointer flex-1">
          <span className="text-gray-700">Credit Card (Revolut)</span>
          <div className="flex items-center gap-2">
            <img src="/images/mastercard.svg" alt="Mastercard" width={30} height={20} />
            <img src="/images/visa.svg" alt="Visa" width={30} height={20} />
            <img src="/images/amex.svg" alt="Amex" width={30} height={20} />
          </div>
        </label>
      </div>

      {/* Google Pay */}
      <div className="flex items-center gap-3 pb-4 border-b border-b-gray-500">
        <input
          type="radio"
          name="payment"
          id="google-pay"
          value="google-pay"
          checked={payment === "google-pay"}
          onChange={(e) => setPayment(e.target.value)}
        />
        <label htmlFor="google-pay" className="flex items-center gap-3 cursor-pointer flex-1">
          <span className="text-gray-700">Google Pay (via Revolut)</span>
          <img src="/images/g-pay-logo.png" alt="Google Pay" width={40} height={20} />
        </label>
      </div>

      {/* Realex */}
      <div className="flex items-center gap-3 pb-4 border-b border-b-gray-500">
        <input
          type="radio"
          name="payment"
          id="realex"
          value="realex"
          checked={payment === "realex"}
          onChange={(e) => setPayment(e.target.value)}
        />
        <label htmlFor="realex" className="cursor-pointer flex-1">
          <span className="text-gray-700">
            Pay By Credit or Debit Card Realex
          </span>
        </label>
      </div>

      {/* PayPal */}
      <div className="flex items-center gap-3 pb-4 border-b border-b-gray-500">
        <input
          type="radio"
          name="payment"
          id="paypal"
          value="paypal"
          checked={payment === "paypal"}
          onChange={(e) => setPayment(e.target.value)}
        />
        <label htmlFor="paypal" className="flex items-center gap-3 cursor-pointer flex-1">
          <img src="/images/paypal.png" alt="PayPal" width={80} height={30} />
          <a href="#" className="text-blue-600 text-sm hover:underline">
            What is PayPal?
          </a>
        </label>
      </div>

      {/* Amazon Pay */}
      <div className="flex items-center gap-3">
        <input
          type="radio"
          name="payment"
          id="amazon-pay"
          value="amazon-pay"
          checked={payment === "amazon-pay"}
          onChange={(e) => setPayment(e.target.value)}
        />
        <label htmlFor="amazon-pay" className="cursor-pointer flex-1">
          <img src="/images/amazonpay.svg" alt="Amazon Pay" width={80} height={30} />
        </label>
      </div>
            </div>

            {/* Apply Discount Code */}
            <div className="bg-white rounded-lg p-6">
              <button className="flex items-center justify-between w-full text-left mb-4">
                <h3 className="text-base font-semibold text-gray-600">Apply Discount Code</h3>
                <ChevronUp className="w-5 h-5 text-gray-400" />
              </button>
              <div className="space-y-4">
                <input type="text" placeholder="Enter discount code" className="w-full" />
                <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-2 rounded-full w-full sm:w-auto">
                  Apply Discount
                </button>
              </div>
            </div>

            {/* Gift Cards */}
            <div className="bg-white rounded-lg p-6">
              <button className="flex items-center justify-between w-full text-left mb-4">
                <h3 className="text-base font-semibold text-gray-600">Gift Cards</h3>
                <ChevronUp className="w-5 h-5 text-gray-400" />
              </button>
              <div className="space-y-4">
                <input type="text" placeholder="Redeem and use your Gift Card now" className="w-full" />
                <div className="flex flex-wrap gap-3">
                  <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-2 rounded-full">
                    Activate
                  </button>
                  <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-2 rounded-full">
                    Check Gift Card status
                  </button>
                </div>
              </div>
            </div>
          </div> 
    </>
  )
}

export default PaymentMethod
