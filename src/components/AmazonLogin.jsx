import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const AmazonLogin = () => {
    const location = useLocation();
  return (
    <>
     <div className="bg-white p-8 rounded-lg shadow-sm">
              {location.pathname==="/login" && (
                <>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">New Customers</h2>
              <p className="text-gray-600 mb-6">
                Creating an account has many benefits: check out faster, keep more than one address, track orders and
                more.
              </p>
              <div className='text-end pt-3 border-t border-t-gray-300'>

              <Link to={'/signup'} className="bg-amber-500 hover:bg-amber-600 font-bold rounded-full py-2 px-4 text-white mb-8">Create an Account</Link>
              </div>
                </>
            )}

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Amazon Sign In</h3>
                <p className="text-gray-600 mb-4">
                  With Amazon Pay and Sign-in with Amazon, you can easily sign-in and use the shipping and payment
                  information stored in your Amazon account to place an order on this shop.
                </p>
                <div className='text-start pt-3 border-t border-t-gray-300'>

                <button className="w-[90%] bg-linear-to-b from-amber-300 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-gray-800 font-medium py-3 rounded border border-amber-500 flex items-center justify-center gap-2">
                  Sign in with <span className="font-bold">amazon</span>
                </button>
                </div>
              </div>
            </div> 
    </>
  )
}

export default AmazonLogin
