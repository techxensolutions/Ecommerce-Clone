import { Edit2,Plus,Minus,Trash2 } from "lucide-react"

const CheckoutItem = ({item}) => {
  return (
    <>
     <div className="bg-white p-4 rounded-lg">
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
    </>
  )
}

export default CheckoutItem
