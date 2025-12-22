import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className="flex-1 py-12">

     <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold text-gray-700 mb-8">Customer Login</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Registered Customers */}
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

            {/* New Customers */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">New Customers</h2>
              <p className="text-gray-600 mb-6">
                Creating an account has many benefits: check out faster, keep more than one address, track orders and
                more.
              </p>
              <div className='text-end pt-3 border-t border-t-gray-300'>

              <Link to={'/signup'} className="bg-amber-500 hover:bg-amber-600 font-bold rounded-full py-2 px-4 text-white mb-8">Create an Account</Link>
              </div>

              <div className="pt-8">
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
          </div>
        </div> 
    </div>
    </>
  )
}

export default Login
