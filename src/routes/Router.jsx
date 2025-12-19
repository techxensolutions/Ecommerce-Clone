import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ShopCategory from "../pages/ShopCategory"
import LandingPage from "../pages/LandingPage"
import LocationPage from "../pages/LocationPage"
import CategoryProduct from "../pages/CategoryProduct"
import Checkout from "../pages/Checkout"

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
          element:<Checkout/>
        },
      ]
    }
  ]
)

export default router
