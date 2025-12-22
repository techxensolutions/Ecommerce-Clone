import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <>
     <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Registered Customers</h2>
              <p className="text-gray-600 mb-6">If you have an account, sign in with your email address.</p>

              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input id="email" type="email" className="border border-gray-300 p-2 rounded-full text-lg w-72" required />
                </div>

                <div>
                  <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input id="password" type="password" className="border border-gray-300 p-2 rounded-full text-lg w-72" required />
                </div>

                <div className="flex items-center justify-between">
                  <Link to={'/'} className="text-sm text-gray-600 hover:text-amber-500 underline">
                    Forgot Your Password?
                  </Link>
                  <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 p-2 rounded-full">Sign in</button>
                </div>

                <p className="text-xs text-gray-500">
                  This form is protected by reCAPTCHA - the{" "}
                  <Link to={'/'} className="underline">
                    Google Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link to={'/'} className="underline">
                    Terms of Service
                  </Link>{" "}
                  apply.
                </p>
              </form>
            </div> 
    </>
  )
}

export default LoginForm
