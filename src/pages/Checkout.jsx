import { Link, useLocation } from "react-router-dom";
import OrderSummary from "../components/OrderSummary";
import ShippingForm from "../components/ShippingForm";
import { useState } from "react";
import Progressbar from "../components/Progressbar";
import PaymentMethod from "../components/PaymentMethod";

const Checkout = () => {
    const [currentStep,setCurrentStep]=useState("shipping");
    const goToPayment = () => {
    setCurrentStep("payment");
  };
  return (
    <>
    <div className="p-5 flex justify-center">

    <Link to={'/'} className="flex items-center gap-2 py-8">
            <img src="/images/logo.svg" alt="Logo" />
          </Link>
    </div>
        <h1 className="text-4xl font-semibold text-slate-700 mb-8 bg-white px-8">Checkout</h1>
      <div className="container w-full max-w-screen p-8 bg-slate-100">

        {/* Progress Steps */}
        <Progressbar currentStep={currentStep}/>

        <div className="grid lg:grid-cols-[1fr_400px] gap-40">
          {/* Left Column - Form */}
          {currentStep==="shipping" && <ShippingForm goToNext={goToPayment}/>}
          {currentStep==="payment" && <PaymentMethod/>}

          {/* Right Column - Order Summary */}
          <OrderSummary/>
        </div>
      </div>
    </>
  )
}

export default Checkout
