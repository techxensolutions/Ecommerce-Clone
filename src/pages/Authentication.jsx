import { Info } from "lucide-react"
import { useState } from "react"
import SignupForm from "../components/SignupForm"
import { useLocation } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import AmazonLogin from "../components/AmazonLogin"

const Authentication = () => {
    const location=useLocation();
  return (
    <>
     <div className="flex-1 py-12">

     <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold text-gray-700 mb-8">{location.pathname==="/login" && "Customer Login"}</h1>
          <h1 className="text-3xl font-semibold text-gray-700 mb-8">{location.pathname==="/signup" && "Create New Customer Account"}</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Registered Customers */}
            {location.pathname==="/signup" && <SignupForm/>}
            {location.pathname==="/login" && <LoginForm/>}

            {/* New Customers */}
            <AmazonLogin/>
          </div>
        </div> 
    </div>
    </>
  )
}

export default Authentication
