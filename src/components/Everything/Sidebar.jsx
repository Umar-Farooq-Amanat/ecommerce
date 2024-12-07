import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineMobile, AiOutlineLaptop } from "react-icons/ai";

const Sidebar = () => {
  const dispatch = useDispatch();
  const clickref = useRef(null);

  return (
    <>
      <div className="hidden lg:mt-20 lg:visible lg:py-[5rem] lg:flex lg:flex-col">
        <div className="w-[100%] lg:flex lg:pr-10">
          <input
            type="text"
            ref={clickref}
            onChange={(e) =>
              dispatch({ type: "setSearchvalue", payload: e.target.value })
            }
            placeholder="Search Products...."
            className="w-[100%] text-center py-3 px-4 block lg:w-[75%] rounded-full outline-none text-sm text-slate-950 border border-gray-900 focus:border-purple-900 focus:ring-purple-900 dark:bg-slate-900 dark:border-gray-900 dark:text-gray-900"
          />
        </div>

        <div className="hidden lg:mt-10 lg:block">
          <h1 className="font-semibold text-[2rem] text-left">Categories</h1>

          <div className="hover:cursor-pointer text-[1rem]">
            <Link
              to="/landing/category/smartphones"
              className="px-4 py-2 flex rounded-md hover:text-purple-500 w-[100%]"
            >
              <AiOutlineMobile size={25} /> Smartphones
            </Link>
            <Link
              to="/landing/category/laptops"
              className="flex px-4 py-2 rounded-md hover:text-purple-500 w-[100%]"
            >
              <AiOutlineLaptop size={25} /> Laptops
            </Link>
            <Link
              to="/landing/category/fragrances"
              className="flex px-4 py-2 rounded-md hover:text-purple-500 w-[100%]"
            >
              Fragrances
            </Link>
            <Link
              to="/landing/category/skincare"
              className="flex px-4 py-2 rounded-md hover:text-purple-500 w-[100%]"
            >
              Skincare
            </Link>
            <Link
              to="/landing/category/groceries"
              className="flex px-4 py-2 rounded-md hover:text-purple-500 w-[100%]"
            >
              Groceries
            </Link>
            <Link
              to="/landing/category/home-decoration"
              className="flex px-4 py-2 rounded-md hover:text-purple-500 w-[100%]"
            >
              Home Decoration
            </Link>
            <Link
              to="/landing/category/furniture"
              className="flex px-4 py-2 rounded-md hover:text-purple-500 w-[100%]"
            >
              Furniture
            </Link>
            <Link
              to="/landing/category/womens-dresses"
              className="flex px-4 py-2 rounded-md hover:text-purple-500 w-[100%]"
            >
              Women's Dresses
            </Link>
            <Link
              to="/landing/category/womens-shoes"
              className="flex px-4 py-2 rounded-md hover:text-purple-500 w-[100%]"
            >
              Women's Shoes
            </Link>
            <Link
              to="/landing/category/mens-shirts"
              className="flex px-4 py-2 rounded-md hover:text-purple-500 w-[100%]"
            >
              Men's Shirts
            </Link>
            <Link
              to="/landing/category/mens-shoes"
              className="flex px-4 py-2 rounded-md hover:text-purple-500 w-[100%]"
            >
              Men's Shoes
            </Link>
            <Link
              to="/landing/category/mens-watches"
              className="flex px-4 py-2 rounded-md hover:text-purple-500 w-[100%]"
            >
              Men's Watches
            </Link>
            <Link
              to="/landing/category/womens-watches"
              className="flex px-4 py-2 rounded-md hover:text-purple-500 w-[100%]"
            >
              Women's Watches
            </Link>
            <Link
              to="/landing/category/womens-bags"
              className="flex px-4 py-2 rounded-md hover:text-purple-500 w-[100%]"
            >
              Women's Bags
            </Link>
            <Link
              to="/landing/category/womens-jewellery"
              className="flex px-4 py-2 rounded-md hover:text-purple-500 w-[100%]"
            >
              Women's Jewellery
            </Link>
            <Link
              to="/landing/category/sunglasses"
              className="flex px-4 py-2 rounded-md hover:text-purple-500 w-[100%]"
            >
              Sunglasses
            </Link>
            <Link
              to="/landing/category/automotive"
              className="flex px-4 py-2 rounded-md hover:text-purple-500 w-[100%]"
            >
              Automotive
            </Link>
            <Link
              to="/landing/category/motorcycle"
              className="flex px-4 py-2 rounded-md hover:text-purple-500 w-[100%]"
            >
              Motorcycle
            </Link>
            <Link
              to="/landing/category/lighting"
              className="flex px-4 py-2 rounded-md hover:text-purple-500 w-[100%]"
            >
              Lighting
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
