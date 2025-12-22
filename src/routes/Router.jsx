import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ShopCategory from "../pages/ShopCategory"
import LandingPage from "../pages/LandingPage"
import LocationPage from "../pages/LocationPage"
import CategoryProduct from "../pages/CategoryProduct"
import Cart from "../pages/Cart"
import Shipping from "../pages/Shipping"
import ReviewPayment from "../pages/ReviewPayment"
import BlankLayout from "../BlankLayout"
import Checkout from "../pages/Checkout"
import Login from "../pages/Login"
import Authentication from "../pages/Authentication"

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"",
          element:<LandingPage/>
        },
        {
          path:"/category/:categoryName",
          element:<ShopCategory/>
        },
        {
          path:"/product/:productName",
          element:<CategoryProduct/>
        },
        {
          path:"/locations",
          element:<LocationPage/>
        },
        {
          path:"/checkout/cart",
          element:<Cart/>
        },
        {
          path:"/login",
          element:<Authentication/>
        },
        {
          path:"/signup",
          element:<Authentication/>
        },
      ]
    },
    {
      element:<BlankLayout/>,
      children:[
        {
          path:"/checkout",
          element:<Checkout/>
        },
      ]
    }
  ]
)

export default router
