import React from 'react'

const ContactForm = () => {
  return (
    <>
    <div className="max-w-[30rem]   px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
         <div className="max-w-xl mx-auto">  
    <div className="">
      <form>
        <div className="grid gap-4 lg:gap-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label  className="block text-sm text-gray-800 font-medium dark:text-gray">First Name</label>
              <input type="text" name="hs-firstname-hire-us-2" id="hs-firstname-hire-us-2" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"/>
            </div>
            <div>
              <label  className="block text-sm text-gray-800 font-medium dark:text-gr">Last Name</label>
              <input type="text" name="hs-lastname-hire-us-2" id="hs-lastname-hire-us-2" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"/>
            </div>
          </div>


          <div>
            <label className="block text-sm text-gray-800 font-medium dark:text-white">Work Email</label>
            <input type="email" name="hs-work-email-hire-us-2" id="hs-work-email-hire-us-2" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
          </div>


         
    

          <div>
            <label  className="block text-sm text-gray-800 font-medium dark:text-white">Details</label>
            <textarea id="hs-about-hire-us-2" name="hs-about-hire-us-2" rows="4" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"></textarea>
          </div>
        </div>
       
      
   

        <div className="mt-6 grid">
          <button type="submit" className="inline-flex justify-center items-center gap-x-3 text-center bg-purple-900 hover:bg-purple-600 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">Send inquiry</button>
        </div>

       
      </form>

    </div>
  </div>
</div>
    
    </>
  )
}

export default ContactForm