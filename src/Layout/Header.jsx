import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiAddressBookFill, PiGridFourFill, PiNotebookFill, PiShoppingCartSimple } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { BsCaretDownFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {  useLocation } from "react-router-dom";
import { useCallback } from "react";
import Offcanvas from "../components/cart/Offcanvas";
import axios from "axios";
import { PiChartPieFill } from "react-icons/pi";

const Header = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
   const navigate=useNavigate();

  const { sum, getItem, Quantity, cart, checkoutTotal, offCanvas } =
    useSelector((state) => state.custom);

  //   useEffect(()=>{
  //     const getItem = localStorage.getItem("count");

  //      dispatch({type:"setGetItem" , payload: getItem})

  //     console.log(getItem)
  // },[sum])

  //   useEffect(()=>{

  // },[cart,checkoutTotal,sum])

  useEffect(() => {
    const result = cart.reduce((acc, curr) => {
      acc = acc + parseInt(curr.subtotal);

      return acc;
    }, 0);

    dispatch({ type: "setCheckoutsubtotal", payload: result });

    const result1 = cart.reduce((acc, curr) => {
      acc = acc + parseInt(curr.quantity);
      return acc;
    }, 0);
    dispatch({ type: "setSum", payload: result1 });

    localStorage.setItem("count", result1);
  }, [cart, checkoutTotal, sum]);

  const callfunction = () => {
    dispatch({ type: "setOffcanvas", payload: false });
    console.log("hello world");
  };
  const getHeaderColor = (pathname) => {
    
    const colorMap = {
      "/": "home-color", 
      "/about": "about-color", 
      "/contact": "contact-color", 
      "/landing/cart":"cart-color",
      "/landing":"landing-color",
      "/landing/checkout":"checkout-color"
     
    };
  
    return colorMap[pathname] || "default-color"; 
  };

  const removefiltervalue = ()=>{
       dispatch({type:"setFilterValue" , payload: ""})
       navigate("/landing")
  }

  // const start =()=>{
  //   const offcanvasobj =  localStorage.getItem("OffcanvasObject")
  //   console.log(JSON.parse(offcanvasobj))
  //   console.log("offcanvas1")
  //   dispatch({type:"setOffcanvasObject" , payload: JSON.parse(offcanvasobj) })
  // }

  return (
    <>
      {/* <h1>{sum}</h1> */}


 <div className="block shadow-md lg:hidden">
     <div className="flex items-center justify-between px-10">
          <div>
                <Link to="/"> 
                    <img
                        className="w-[5rem] h-[5rem]  "
                        src=".\src\assets\cart.png"
                        alt=""
                      />
                </Link>
                 
                </div>
                <div
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-black transition-all border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              data-hs-overlay="#hs-overlay-example"
              // onClick={start}
            >
            
                <div>
                      <div className="relative mr-5">
                      <PiShoppingCartSimple size={30}  />

                      <p className="absolute bg-gray-500 text-white px-2 -top-[1rem] left-[1rem] rounded-3xl">
                        {/* <h1>{sum}</h1> */}
                        {getItem}
                      </p>
                    </div>
              </div>
                <button type="button" className= "text-gray-500 hover:text-gray-600" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation">
                    <span className="sr-only">Toggle Navigation</span>
                    <svg className="w-7 h-7" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                  </button>
                </div>
      </div>
      
<div id="docs-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 translate-x-full transition-all duration-300 transform hidden fixed top-0 right-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10
 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
  <div className="px-6">
    <a className="flex-none text-xl font-semibold dark:text-white" href="javascript:;" aria-label="Brand">Ecommerce Store</a>
  </div>
  <nav className="flex flex-col flex-wrap w-full p-6 hs-accordion-group" data-hs-accordion-always-open>
    <ul className="space-y-1.5">
      {/* <li>
        <a className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white" href="javascript:;">
          <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>
          Dashboard
        </a>
      </li> */}

      <li className="hs-accordion" id="users-accordion">
        <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-purple-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900
         dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white" href="javascript:;">
          <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
          </svg>
          Users

          <svg className="hidden w-3 h-3 ml-auto text-gray-600 hs-accordion-active:block group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" ></path>
          </svg>

          <svg className="block w-3 h-3 ml-auto text-gray-600 hs-accordion-active:hidden group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
          </svg>
        </a>

        <div id="users-accordion" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
          <ul className="pt-2 pl-3 hs-accordion-group" data-hs-accordion-always-open>
            <li className="hs-accordion" id="users-accordion-sub-1">
              <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-purple-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white" href="javascript:;">
                Sub Menu 1

                <svg className="hidden w-3 h-3 ml-auto text-gray-600 hs-accordion-active:block group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                </svg>

                <svg className="block w-3 h-3 ml-auto text-gray-600 hs-accordion-active:hidden group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
              </a>

              <div id="users-accordion-sub-1" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                <ul className="pt-2 pl-2">
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                      Link 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="hs-accordion" id="users-accordion-sub-2">
              <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-purple-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white" href="javascript:;">
                Sub Menu 2

                <svg className="hidden w-3 h-3 ml-auto text-gray-600 hs-accordion-active:block group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                </svg>

                <svg className="block w-3 h-3 ml-auto text-gray-600 hs-accordion-active:hidden group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
              </a>

              <div id="users-accordion-sub-2" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden pl-2">
                <ul className="pt-2 pl-2">
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                      Link 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>

      <li className="hs-accordion" id="account-accordion">
        <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-purple-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white" href="javascript:;">
          <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>
          Account
          <svg className="hidden w-3 h-3 ml-auto text-gray-600 hs-accordion-active:block group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
          </svg>

          <svg className="block w-3 h-3 ml-auto text-gray-600 hs-accordion-active:hidden group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
          </svg>
        </a>

        <div id="account-accordion" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
          <ul className="pt-2 pl-2">
            <li>
              <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                Link 1
              </a>
            </li>
            <li>
              <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                Link 2
              </a>
            </li>
            <li>
              <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                Link 3
              </a>
            </li>
          </ul>
        </div>
      </li>
      <div className="flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-purple-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white">
      <img
                    className="w-3.5 h-3.5 "
                    src=".\src\assets\menu-cart.avif"
                    alt=""
                  />

            <Link to="/landing" className="hover:cursor-pointer">Shop All</Link>

            </div>

      <li className="hs-accordion" id="projects-accordion">
        <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-purple-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white" href="javascript:;">
          <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"></path>
            <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z"></path>
          </svg>
          Categories

          <svg className="hidden w-3 h-3 ml-auto text-gray-600 hs-accordion-active:block group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
          </svg>

          <svg className="block w-3 h-3 ml-auto text-gray-600 hs-accordion-active:hidden group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
          </svg>
        </a>
   
        <div id="projects-accordion" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">

        <div className="text-sm hover:cursor-pointer">
                <Link to="/landing/category/smartphones" name="smartphones"  className="block px-4 py-2 rounded-md hover:text-purple-800 w-[100%] ">smartphones</Link>
                <Link to="/landing/category/laptops" name="laptops"  className="block px-4 py-2 rounded-md hover:text-purple-800  w-[100%] ">laptops</Link>
                <Link to="/landing/category/fragrances" name="fragrances"  className="block px-4 py-2 rounded-md hover:text-purple-800  w-[100%] ">fragrances</Link>
                <Link to="/landing/category/skincare" name="skincare"  className="block px-4 py-2 rounded-md hover:text-purple-800  w-[100%] ">skincare</Link>
                <Link to="/landing/category/groceries" name="groceries"  className="block px-4 py-2 rounded-md hover:text-purple-800  w-[100%] ">groceries</Link>
                <Link to="/landing/category/home-decoration" name="home-decoration"  className="block px-4 py-2 rounded-md hover:text-purple-800  w-[100%] ">home-decoration</Link>
                <Link to="/landing/category/furniture" name="furniture"  className="block px-4 py-2 rounded-md hover:text-purple-800  w-[100%] ">furniture</Link>
                <Link to="/landing/category/womens-dresses" name="womens-dresses"  className="block px-4 py-2 rounded-md hover:text-purple-800 w-[100%] ">womens-dresses</Link>
                <Link to="/landing/category/womens-shoes" name="womens-shoes"  className="block px-4 py-2 rounded-md hover:text-purple-800 w-[100%] ">womens-shoes</Link>
                <Link to="/landing/category/mens-shirts" name="mens-shirts"  className="block px-4 py-2 rounded-md hover:text-purple-800 w-[100%] ">mens-shirts</Link>
                <Link to="/landing/category/mens-shoes" name="mens-shoes"  className="block px-4 py-2 rounded-md hover:text-purple-800 w-[100%] ">mens-shoes</Link>
                <Link to="/landing/category/mens-watches" name="mens-watches"  className="block px-4 py-2 rounded-md hover:text-purple-800 w-[100%] ">mens-watches</Link>
                <Link to="/landing/category/womens-watches" name="womens-watches"  className="block px-4 py-2 rounded-md hover:text-purple-800 w-[100%] ">womens-watches</Link>
                <Link to="/landing/category/womens-bags" name="womens-bags"  className="block px-4 py-2 rounded-md hover:text-purple-800 w-[100%] ">womens-bags</Link>
                <Link to="/landing/category/womens-jewellery" name="womens-jewellery"  className="block px-4 py-2 rounded-md hover:text-purple-800 w-[100%] ">womens-jewellery</Link>
                <Link to="/landing/category/sunglasses" name="sunglasses"  className="block px-4 py-2 rounded-md hover:text-purple-800 w-[100%] ">sunglasses</Link>
                <Link to="/landing/category/automotive" name="automotive"  className="block px-4 py-2 rounded-md hover:text-purple-800 w-[100%] ">automotive</Link>
                <Link to="/landing/category/motorcycle" name="motorcycle"  className="block px-4 py-2 rounded-md hover:text-purple-800 w-[100%] ">motorcycle</Link>
                <Link to="/landing/category/lighting" name="lighting"  className="block px-4 py-2 rounded-md hover:text-purple-800 w-[100%] ">lighting</Link>
              </div>
        </div>
      
      </li>

      {/* <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
        <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
        </svg>
        Calendar
      </a></li>
      <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
        <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
        </svg>
        Documentation
      </a></li> */}
    </ul>
  </nav>
</div>
 </div>  
 <div className="">
 <div className={`head-main absolute z-10 hidden  ${getHeaderColor(location.pathname)} w-[100%] text-white lg:block`}>
  <div className="flex justify-between items-center w-[100%] h-[5rem] py-5 px-16 shadow-md">
    <div className="flex items-center gap-5 h-[5rem]">
    
      <div className="text-[1.2rem] h-[5rem] flex items-center">
        <Link to="/">
          <img className="w-[8rem] h-[8rem]" src=".\src\assets\cart.png" alt="" />
        </Link>
      </div>
      <div className="flex flex-row items-center text-[1.2rem] hover:cursor-pointer h-[5rem]">
        <p className="flex" onClick={removefiltervalue}><PiChartPieFill size={25}/>&nbsp;EveryThing</p>
      </div>
     
     
    

    <div className="flex items-center gap-5 h-[5rem]">
 
      {/* <div className="relative" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      
        <div className="flex items-center text-[1.1rem] hover:cursor-pointer h-[5rem]">
          <p className="flex"><PiGridFourFill size={25}/> &nbsp; Categories</p>
          <p className="mt-1 ml-1">
            <BsCaretDownFill />
          </p>
        </div>
        {show && (
                <div className="absolute top-[5rem] bg-purple-100 hover:cursor-pointer rounded-lg">
                  <div className=" grid grid-cols-2 text-[1.1rem] text-black  shadow-md  gap-2 w-[22rem] h-[40rem] place-items-center place-content-center p-10 ">
                    <Link
                      to="/landing/smartphone"
                      className="border-[1px] px-4 py-2 rounded-md hover:bg-purple-100 w-[100%] text-center"
                    >
                      smartphones
                    </Link>
                    <p className="px-4 py-2 rounded-md hover:bg-purple-200  w-[100%] text-center">
                      fragrances
                    </p>
                    <p className="px-4 py-2 rounded-md hover:bg-purple-200  w-[100%] text-center">
                      skincare
                    </p>
                    <p className="px-4 py-2 rounded-md hover:bg-purple-200  w-[100%] text-center">
                      groceries
                    </p>
                    <p className="px-4 py-2 rounded-md hover:bg-purple-200  w-[100%] text-center">
                      home-decoration
                    </p>
                    <p className="px-4 py-2 rounded-md hover:bg-purple-200  w-[100%] text-center">
                      furniture
                    </p>
                    <p className="px-4 py-2 rounded-md hover:bg-purple-200 w-[100%] text-center">
                      womens-dresses
                    </p>
                    <p className="px-4 py-2 rounded-md hover:bg-purple-200 w-[100%] text-center">
                      womens-shoes
                    </p>
                    <p className="px-4 py-2 rounded-md hover:bg-purple-200 w-[100%] text-center">
                      mens-shirts
                    </p>
                    <p className="px-4 py-2 rounded-md hover:bg-purple-200 w-[100%] text-center">
                      mens-shoes
                    </p>
                    <p className="px-4 py-2 rounded-md hover:bg-purple-200 w-[100%] text-center">
                      mens-watches
                    </p>
                    <p className="px-4 py-2 rounded-md hover:bg-purple-200 w-[100%] text-center">
                      womens-watches
                    </p>
                    <p className="px-4 py-2 rounded-md hover:bg-purple-200 w-[100%] text-center">
                      womens-bags
                    </p>
                    <p className="px-4 py-2 rounded-md hover:bg-purple-200 w-[100%] text-center">
                      womens-jewellery
                    </p>
                    <p className="px-4 py-2 rounded-md hover:bg-purple-200 w-[100%] text-center">
                      sunglasses
                    </p>
                    <p className="px-4 py-2 rounded-md hover:bg-purple-200 w-[100%] text-center">
                      automotive
                    </p>
                    <p className="px-4 py-2 rounded-md hover:bg-purple-200 w-[100%] text-center">
                      motorcycle
                    </p>
                    <p className="px-4 py-2 rounded-md hover:bg-purple-200 w-[100%] text-center">
                      lighting
                    </p>
                  </div>
                </div>
              )}
         
       

      </div> */}
      <div className="flex items-center text-[1.1rem] hover:cursor-pointer h-[5rem]">
      <Link to="/about" className="flex"><PiAddressBookFill size={25} /> &nbsp; About Us</Link>
      </div>
      <div className="flex items-center text-[1.1rem] hover:cursor-pointer h-[5rem]">
      <Link to="/contact" className="flex"><PiNotebookFill size={25} /> Contact Us</Link>
      </div>
      
    </div>
  </div>
  <div className="flex gap-10">
            <div
              // className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-black transition-all border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              // data-hs-overlay="#hs-overlay-example"
              // onClick={start}
            >
              <Link to="/landing/cart">
              <div className="relative">
                <PiShoppingCartSimple size={22} />

                <p className="absolute bg-purple-800 text-white px-2
                 -top-[0.8rem] left-[1rem]  rounded-2xl">
                  {/* <h1>{sum}</h1> */}
                  {getItem}
                </p>
              </div>
              </Link>
            </div>
            <div>
              <Link>
                {" "}
                <FaUserAlt size={20} />
              </Link>
            </div>
          </div>
</div>
</div>
</div>
    </>
  );
};

export default Header;
