import React from "react";
// import { FaCcPaypal } from "react-icons/fa";
import Table from "./Table";
import PaymentMethod from "./PaymentMethod";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const CheckoutPage = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    const getItem = localStorage.getItem("count");
  
     dispatch({type:"setGetItem" , payload: getItem})
  
    // console.log(getItem)
    console.log("landing page")
  })

  return (
    <>
      <div className="bg-purple-100 w-[100%]">
        <div className="flex flex-col lg:flex-row w-[80%] mx-auto px-5 py-40 lg:flex lg:justify-between gap-5 ">
          <Table />
          <PaymentMethod />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
