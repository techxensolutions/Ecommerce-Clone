import React from 'react'

const OrderSummaryItem = ({item}) => {
  return (
    <>
     <div className="flex gap-4 mb-6">
                      <div className="w-20 h-20 bg-white rounded flex items-center justify-center shrink-0">
                        <img
                          src={item.image}
                          alt="Mamas & Papas Mini Rattle"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-slate-600">Qty: 1</p>
                      </div>
                      <div className="font-semibold">£{item.price.toFixed(2)}</div>
                    </div> 
    </>
  )
}

export default OrderSummaryItem
