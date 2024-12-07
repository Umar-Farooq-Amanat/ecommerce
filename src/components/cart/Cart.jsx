import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useMemo } from "react";
import Checkout from "./Checkout";
import { useLayoutEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart,sum,checkoutTotal , getItem} = useSelector(
    (state) => state.custom
  );

  useEffect(() => {
    const cart = async () => {
      const { data } = await axios.get("  http://localhost:3000/carts");
      dispatch({ type: "setCarts", payload: data });

      // localStorage.setItem("OffcanvasObject" , JSON.stringify(data))    
    };
    cart();

    
  }, []);
   
  useEffect(()=>{
    const result =cart.reduce((acc,curr)=>{
     acc = acc+ parseInt(curr.subtotal);

     return acc;
},0)    
      
      dispatch({type:"setCheckoutsubtotal" ,payload:result});
      

      const result1 =cart.reduce((acc,curr)=>{
        acc = acc+ parseInt(curr.quantity);
        return acc;
 },0)    
 dispatch({type:"setSum" ,payload:result1});

 localStorage.setItem("count" , result1)
 
 
},[cart,checkoutTotal,sum])


useEffect(()=>{
  const getItem = localStorage.getItem("count");

   dispatch({type:"setGetItem" , payload: getItem})

 
},[sum,getItem])


  const deleteCartItem = (item) => {
    // console.log(item.id)
    const filterArray = cart.filter((fil) => fil.id !== item.id);

    dispatch({ type: "setCarts", payload: filterArray });

    axios.delete(" http://localhost:3000/carts/" + item.id);
  };
  return (
    <>
      {/* <h1>{tayyab}</h1> */}

      <div className="bg-purple-50">
        <div>
          <h1 className="text-[2rem] text-gray-600 pt-28 pb-5 font-extrabold  flex justify-center items-center">
            Your Cart
          </h1>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4 mb-8">
          <div className="flex flex-col  max-w-[100%] ml-10">

          {cart.map((item) => {
                        return (
                      <div key={item.id} className="block mb-16 border lg:hidden">
                        <div>
                        <img
                                    className="w-[5rem] h-[5rem] block mx-auto object-contain"
                                    src={`${item.images[0]}`}
                                    alt=""
                                  />
                        </div>
                        <div className="flex justify-between p-5 border-b-2 ">
                            <p>Product</p>
                            <p>{item.title}</p>
                        </div>
                        <div className="flex justify-between p-5 border-b-2">
                            <p>Quantity</p>
                            <p>{item.quantity}</p>
                            
                        </div>
                        <div className="flex justify-between p-5 border-b-2">
                            <p>Price</p>
                            <p>${item.price}</p>
                        </div>
                        <div className="flex justify-between p-5 border-b-2">
                            <p>Discunt</p>
                            <p>${item.discountPercentage}</p>
                        </div>
                        <div className="flex justify-between p-5 border-b-2">
                            <p>Subtotal</p>
                            <p>${parseInt( item.subtotal)}</p>
                        </div>
                      
                      <div className="py-5 border-b-2">

                        <button className=" py-3 flex justify-center  w-[25%] rounded-md text-white mx-auto text-center bg-purple-500 ">Delete</button>
                      </div>
                      </div> 
                        )
          })
          }

            <div className="hidden lg:block -m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                
               

                <div className="overflow-hidden">

                  
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr className="bg-purple-900 ">
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-left text-white uppercase"
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-left text-white uppercase"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-left text-white uppercase"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-left text-white uppercase"
                        >
                          Discount
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-left text-white uppercase"
                        >
                          Subtotal
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-right text-white uppercase"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                  
                    <tbody className="divide-y divide-gray-200 border-r-2 border-l-2 border-purple-900 dark:divide-gray-700">
                      {cart.map((item) => {
                        return (
                          <tr
                            key={item.id}
                            className="hover:bg-purple-100 dark:hover:bg-purple-700"
                          >
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-400">
                              <div className="flex items-center gap-5">
                                <div>
                                  {" "}
                                  <img
                                    className="w-[5rem] h-[5rem] object-contain"
                                    src={`${item.images[0]}`}
                                    alt=""
                                  />{" "}
                                </div>
                                <p>{item.title}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-400">
                              {item.quantity}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-400">
                              ${item.price}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-400">
                              {item.discountPercentage}%
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-400">
                              ${parseInt( item.subtotal)}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <button
                                className="text-purple-500 hover:text-purple-700"
                                href="#"
                                onClick={() => {
                                  deleteCartItem(item);
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="w-full lg:w-4/12 px-4 mb-8">
          <Checkout />
          </div>
        </div>

    
      </div>

    
    </>
  );
};

export default Cart;
