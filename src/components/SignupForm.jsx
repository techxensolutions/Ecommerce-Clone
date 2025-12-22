import { useState } from 'react'
import { Info } from 'lucide-react'
const SignupForm = () => {
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
    remoteShopping: false,
  })
   const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }
  return (
    <>
     <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Personal Information</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="border border-gray-300 p-2 rounded-full text-lg w-72"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="border border-gray-300 p-2 rounded-full text-lg w-72"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="newsletter"
                  type="checkbox"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked })}
                />
                <label htmlFor="newsletter" className="text-sm text-gray-600">
                  Sign Up for Newsletter
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="remoteShopping"
                  type="checkbox"
                  checked={formData.remoteShopping}
                  onCheckedChange={(checked) => setFormData({ ...formData, remoteShopping: checked })}
                />
                <label htmlFor="remoteShopping" className="text-sm text-gray-600 flex items-center gap-1">
                  Allow remote shopping assistance
                  <Info className="size-4 text-gray-400" />
                </label>
              </div>

              {/* Sign-in Information */}
              <div className="pt-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-6">Sign-in Information</h2>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border border-gray-300 p-2 rounded-full text-lg w-72"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="border border-gray-300 p-2 rounded-full text-lg w-72"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Minimum of different classes of characters in password is 3. Classes of characters: Lower Case,
                      Upper Case, Digits, Special Characters.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="border border-gray-300 p-2 rounded-full text-lg w-72"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-6">
                <button type="button" className="text-gray-600">
                  Back
                </button>
                <button type="submit" className="bg-[#F5A623] hover:bg-[#E09612] text-white font-bold px-8 p-2 rounded-full">
                  Create an Account
                </button>
              </div>
            </form>
          </div> 
    </>
  )
}

export default SignupForm
