import React from "react";
import { Link } from "react-router-dom";

const ShippingForm = ({goToNext}) => {
  
  return (
    <>
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-700 mb-6">
          Shipping Address
        </h2>

        <form className="space-y-6 pr-10 box-border">
          {/* Email Address */}
          <div>
            <label htmlFor="email" className="text-slate-700 font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              className="mt-2 w-full border border-gray-400 rounded-full text-lg p-1"
              placeholder=""
            />
            <p className="text-sm text-slate-500 mt-2">
              You can create an account after checkout.
            </p>
          </div>

          {/* First Name and Last Name */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="text-slate-700 font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                className="mt-2 w-full border border-gray-400 rounded-full text-lg p-1"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="text-slate-700 font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                className="mt-2 w-full border border-gray-400 rounded-full text-lg p-1"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="text-slate-700 font-medium">
              Company
            </label>
            <input
              id="company"
              className="mt-2 w-full border border-gray-400 rounded-full text-lg p-1"
            />
          </div>

          {/* Street Address */}
          <div>
            <label htmlFor="street1" className="text-slate-700 font-medium">
              Street Address <span className="text-red-500">*</span>
            </label>
            <input
              id="street1"
              className="mt-2 mb-3 w-full border border-gray-400 rounded-full text-lg p-1"
            />
            <input
              id="street2"
              className="w-full border border-gray-400 rounded-full text-lg p-1"
            />
          </div>

          {/* Country and State/Province */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="country" className="text-slate-700 font-medium">
                Country <span className="text-red-500">*</span>
              </label>
              <select
                id="country"
                defaultValue="uk"
                className="mt-2 w-full rounded-full border border-gray-500 px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <option value="uk">United Kingdom</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
              </select>
            </div>
            <div>
              <label htmlFor="state" className="text-slate-700 font-medium">
                State/Province
              </label>
              <input
                id="state"
                className="mt-2 w-full border border-gray-400 rounded-full text-lg p-1"
              />
            </div>
          </div>

          {/* City and Zip/Postal Code */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="text-slate-700 font-medium">
                City <span className="text-red-500">*</span>
              </label>
              <input
                id="city"
                className="mt-2 w-full border border-gray-400 rounded-full text-lg p-1"
              />
            </div>
            <div>
              <label
                htmlFor="postalCode"
                className="text-slate-700 font-medium"
              >
                Zip/Postal Code <span className="text-red-500">*</span>
              </label>
              <input
                id="postalCode"
                className="mt-2 w-full border border-gray-400 rounded-full text-lg p-1"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="text-slate-700 font-medium">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2 mt-2 w-full border border-gray-400 rounded-full text-lg p-1">
              <div className="w-20">
                <select
                  defaultValue="+44"
                  className="w-full border rounded-full border-gray-500 px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+33">🇫🇷 +33</option>
                </select>
              </div>
              <input
                id="phone"
                type="tel"
                placeholder="2538501234546"
                className="flex-1 w-full border border-gray-400 rounded-full text-lg p-1"
              />
            </div>
          </div>

          {/* Shipping Methods */}
          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-slate-700 mb-6">
              Shipping Methods
            </h2>

            <div className="space-y-4">
              <label
                htmlFor="standard"
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shipping"
                    id="standard"
                    value="standard"
                    defaultChecked
                    className="accent-slate-600"
                  />

                  <div>
                    <p className="text-slate-700 font-medium">£7.50</p>
                    <p className="text-sm text-slate-500">Standard Delivery</p>
                  </div>
                </div>

                <span className="text-slate-600">Delivery</span>
              </label>
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-end pt-4">
            <button onClick={goToNext} className="bg-[#FDB913] hover:bg-[#FDB913]/90 text-white font-semibold px-12 py-3 rounded-full">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ShippingForm;
