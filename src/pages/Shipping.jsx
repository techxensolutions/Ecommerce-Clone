import { Link, useLocation } from "react-router-dom";
import OrderSummary from "../components/OrderSummary";
import ShippingForm from "../components/ShippingForm";

const Shipping = () => {
  const location=useLocation();
  return (
    <>
    <div className="p-5 flex justify-center">

    <Link to={'/'} className="flex items-center gap-2 py-8">
            <img src="https://www.bellababy.co.uk/static/version1764159769/frontend/Bellababy/hyva-base/en_GB/images/logo.svg" alt="Logo" />
          </Link>
    </div>
        <h1 className="text-4xl font-semibold text-slate-700 mb-8 bg-white px-8">Checkout</h1>
      <div className="container w-full max-w-screen p-8 bg-slate-100">

        {/* Progress Steps */}
        <div className="bg-slate-100 rounded-lg mb-8">
          <div className="flex items-center gap-2 text-2xl">
            <span className="text-slate-600">Cart</span>
            <div className="text-slate-800 w-10 text-center">&gt;</div>
            <span className={`${location.pathname==="/checkout/shipping" ? "text-[#FDB913] font-semibold" : "text-slate-800"}`}>Shipping</span>
            <div className="text-slate-800 w-10 text-center">&gt;</div>
            <span className={`${location.pathname==="/checkout/payment" ? "text-[#FDB913] font-semibold" : "text-slate-400"}`}>Review & Payments</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-40">
          {/* Left Column - Form */}
          <ShippingForm/>

          {/* Right Column - Order Summary */}
          <OrderSummary/>
        </div>
      </div>
    </>
  );
};

export default Shipping;
