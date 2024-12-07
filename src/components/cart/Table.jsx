import React from 'react'

const Table = () => {
  return (
      <>
         <div className="bg-purple-200 w-[100%] lg:w-[60%] flex justify-center">
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-xl mx-auto">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                  Billing Details
                </h1>
              </div>

              <div className="mt-12 w-[35rem]">
                <form>
                  <div className="grid gap-4 lg:gap-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                      <div>
                        <label
                          htmlFor="hs-firstname-hire-us-2"
                          className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="hs-firstname-hire-us-2"
                          id="hs-firstname-hire-us-2"
                          className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="hs-lastname-hire-us-2"
                          className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="hs-lastname-hire-us-2"
                          id="hs-lastname-hire-us-2"
                          className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="hs-work-email-hire-us-2"
                        className="block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        Company Name
                      </label>
                      <input
                        type="email"
                        name="hs-work-email-hire-us-2"
                        id="hs-work-email-hire-us-2"
                        
                        className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="hs-work-email-hire-us-2"
                        className="block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        Country/Region
                      </label>
                      <input
                        type="email"
                        name="hs-work-email-hire-us-2"
                        id="hs-work-email-hire-us-2"
                         
                        className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="hs-work-email-hire-us-2"
                        className="block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        Street Address
                      </label>
                      <input
                        type="email"
                        name="hs-work-email-hire-us-2"
                        id="hs-work-email-hire-us-2"
                         
                        className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="hs-work-email-hire-us-2"
                        className="block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        Town/City
                      </label>
                      <input
                        type="email"
                        name="hs-work-email-hire-us-2"
                        id="hs-work-email-hire-us-2"
                         
                        className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="hs-work-email-hire-us-2"
                        className="block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        State/Country
                      </label>
                      <input
                        type="email"
                        name="hs-work-email-hire-us-2"
                        id="hs-work-email-hire-us-2"
                         
                        className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="hs-work-email-hire-us-2"
                        className="block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        Postcode Zip
                      </label>
                      <input
                        type="email"
                        name="hs-work-email-hire-us-2"
                        id="hs-work-email-hire-us-2"
                         
                        className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                      <div>
                        <label
                          htmlFor="hs-company-hire-us-2"
                          className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                          Phone
                        </label>
                        <input
                          type="text"
                          name="hs-company-hire-us-2"
                          id="hs-company-hire-us-2"
                          className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="hs-company-website-hire-us-2"
                          className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                          Email Address
                        </label>
                        <input
                          type="text"
                          name="hs-company-website-hire-us-2"
                          id="hs-company-website-hire-us-2"
                          className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="hs-about-hire-us-2"
                        className="block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        Additional Information
                      </label>
                      <textarea
                        id="hs-about-hire-us-2"
                        name="hs-about-hire-us-2"
                        rows="4"
                        className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      ></textarea>
                    </div>
                  </div>

                  <div className="grid mt-6">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white transition bg-purple-800 border border-transparent rounded-md gap-x-3 hover:bg-blue-700 lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
                    >
                      Send inquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      
      </>
  )
}

export default Table