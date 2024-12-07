import React from 'react'
import { FaCcPaypal } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const PaymentMethod = () => {

  const {cart,checkoutTotal} = useSelector(state=>state.custom)
  
  return (
    <>
        <div className="w-[100%] lg:w-[50%] bg-purple-400">
          <div className="mt-16">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white sm:text-4xl dark:text-white">
                Your Order
              </h1>
            </div>
            <div>
              <div className="flex flex-col p-10 pt-24">
                <div className="-m-1.5 overflow-x-hidden">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="pr-16 py-3 text-center text-[1.3rem]  text-purple-100 uppercase"
                            >
                              Product
                            </th>
                            <th
                              scope="col"
                              className="py-3 text-[1.3rem]  text-center text-purple-100  uppercase "
                            >
                              SubTotal
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                          
                        {cart.map((item) => {
                          return (
                            <tr key={item.id}>
                              <td className="py-4 pr-16 text-sm font-medium text-center text-gray-800 whitespace-nowrap dark:text-gray-200">
                                {item.title} x {item.quantity}
                              </td>
                              <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap dark:text-gray-200">
                                ${parseInt(item.subtotal)}
                              </td>
                            </tr>
                          );
                        })}
                        
                          {/* <tr>
                            <td className="py-4 pr-16 text-sm font-medium text-center text-gray-800 whitespace-nowrap dark:text-gray-200">
                              John Brown
                            </td>
                            <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap dark:text-gray-200">
                              45
                            </td>
                          </tr> */}
                          <tr>
                            <td className="pt-10 pb-4 pr-16 text-sm font-bold text-center text-purple-900 whitespace-nowrap dark:text-gray-200">
                              Subtotal
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-center text-purple-200 whitespace-nowrap dark:text-gray-200">
                              ${checkoutTotal}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-4 pr-16 text-sm font-bold text-center text-purple-900 whitespace-nowrap dark:text-gray-200">
                              Total
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-center text-purple-200 whitespace-nowrap dark:text-gray-200">
                              ${checkoutTotal}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flex flex-col w-[30rem] mx-auto mt-24 text-purple-900">
    <div className="flex justify-around ">
        <ul className="flex gap-5">
            <li className="text-[0.9rem]">
                <input className="mr-2" type="radio" name="" id="" /> Direct Bank Transfer
            </li>
            <li className="text-[0.9rem]">
                <input className="mr-2" type="radio" name="" id="" /> Direct Bank Transfer
            </li>
        </ul>
    </div>
    <div className="flex justify-around">
        <ul className="flex gap-5">
            <li className="text-[0.9rem]">
                <input className="mr-2" type="radio" name="" id="" /> Direct Bank Transfer
            </li>
            <li className="text-[0.9rem]">
                <input className="mr-2" type="radio" name="" id="" /> Direct Bank Transfer
            </li>
        </ul>
    </div>
    <div className="flex items-center gap-5">
        <div className="text-[0.9rem] ml-16">
            <input className="mr-2" type="radio" name="" id="" /> PayPal
        </div>
        <div className="inline-block ">
            <FaCcPaypal size={35} />
        </div>
    </div>
</div>

                    <div className='w-[80%] mx-auto mt-28 ml-[5rem]'>
                        <button className='bg-purple-800 text-center  px-[7rem] py-[0.7rem] text-[1rem] text-white'>Place Order</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default PaymentMethod