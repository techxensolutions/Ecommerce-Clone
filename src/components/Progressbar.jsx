import React from 'react'

const Progressbar = ({currentStep}) => {
  return (
    <>
     <div className="bg-slate-100 rounded-lg mb-8">
          <div className="flex items-center gap-2 text-2xl">
            <span className="text-slate-600">Cart</span>
            <div className="text-slate-800 w-10 text-center">&gt;</div>
            <span className={`${currentStep==="shipping" ? "text-[#FDB913] font-semibold" : "text-slate-800"}`}>Shipping</span>
            <div className="text-slate-800 w-10 text-center">&gt;</div>
            <span className={`${currentStep==="payment" ? "text-[#FDB913] font-semibold" : "text-slate-400"}`}>Review & Payments</span>
          </div>
        </div> 
    </>
  )
}

export default Progressbar
