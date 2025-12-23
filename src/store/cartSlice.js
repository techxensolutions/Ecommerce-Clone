import { createSlice } from "@reduxjs/toolkit";
const recalculateTotal=(state)=>{
  state.totalPrice=state.products.reduce((total , current)=>total+current.price * current.quantity,0);
  state.totalQuantity=state.products.reduce((total , current)=>total+current.quantity,0);
}
const cartSlice = createSlice({
  name:"cart",
  initialState:
  {
    products:[],
    totalPrice:0,
    totalQuantity:0
  },
  reducers:{
    addProduct(state,action){
      const product = action.payload;
      const exist = state.products.find((prod)=>prod._id===product._id);
      if (exist && product.stock > product.quantity) {
        exist.quantity+=quantity;
      }
      state.products.push({...product,quantity:1});
      recalculateTotal(state);
    },
    decreaseQuantity(state,action){
      const {id} = action.payload;
      const exist = state.products.find((prod)=>prod._id===id);
      if (exist && exist.quantity > 0) {
        exist.quantity-=1;
      }
      recalculateTotal(state);
    },
    increaseQuantity(state,action){
      const {id} = action.payload;
      const exist = state.products.find((prod)=>prod._id===id);
      if (exist && exist.stock > exist.quantity) {
        exist.quantity+=1;
      }
      recalculateTotal(state);
    },
  }
})
export const {addProduct, increaseQuantity, decreaseQuantity}=cartSlice.actions;
export default cartSlice.reducer;