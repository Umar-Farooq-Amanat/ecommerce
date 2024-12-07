import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import Cartitem from "./Cartitem";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Showall from "./Showall";
import Sidebar from "./Sidebar";
import { AiOutlineSearch } from "react-icons/ai";


const LandingPage = () => {
  // const [page,setPage] =useState(1);
  // const [limit,setLimit] =useState(10);
  const clickref = useRef(null);

  const dispatch = useDispatch();
  const { cart, sum, Quantity, getItem , searchValue} = useSelector((state) => state.custom);

   

  useEffect(() => {
    const getItem = localStorage.getItem("count");

    dispatch({ type: "setGetItem", payload: getItem });

    // console.log(getItem)
  });

  const filterValuefunction = () => {
    dispatch({ type: "setFilterValue", payload: searchValue });
   
    clickref.current.value = "";
  };

  return (
    <>
      <div className="bg-purple-100 w-[100%] h-[100%] ">
        <div className="max-w-[90%] mx-auto ">
        <div className="h-[10vh] w-[100%]  flex items-center justify-center lg:hidden">
                <input
                  type="text"
                  ref={clickref}
                  onChange={(e) =>
                    dispatch({
                      type: "setSearchvalue",
                      payload: e.target.value,
                    })
                  }
                  placeholder="Search Products...."
                  className=" text-center py-6 w-[100%] h-10 block lg:w-[75%] rounded-l-md outline-none text-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
                <button
                  className="px-4 py-3 text-white bg-purple-500 rounded-r-md"
                  onClick={filterValuefunction}
                >
                 <AiOutlineSearch size={28}/>
                </button>
              </div>
          <div className="flex ">
            <div className="w-0  lg:w-[25%] ">
             
              
              <Sidebar />
            
            
            </div>
            <div className="w-[100%] lg:w-[75%] bg-purple-200 lg:my-[5rem]">
              <Showall />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
