import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import Cartitem from "./Cartitem";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Showall = () => {
  const dispatch = useDispatch();
  const { searchValue, products } = useSelector((state) => state.custom);

  const [currentPageData, setCurrentPageData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const productsPerPage = 10; // Only show 10 products per page
  const { category } = useParams();

  useEffect(() => {
    // Fetch products based on the category
    const fetchItems = async () => {
      try {
        let apiUrl = "http://localhost:3000/products";
        if (category) {
          apiUrl += `?category=${category}`;
        }
        const response = await axios.get(apiUrl);
        const allProducts = response.data;

        setFilteredProducts(allProducts); // Store all products for filtering
        setPageCount(Math.ceil(allProducts.length / productsPerPage)); // Set page count
        dispatch({ type: "setProducts", payload: allProducts }); // Update Redux store
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchItems();
  }, [category, dispatch]);

  useEffect(() => {
    // Filter products based on search value
    const filtered =
      searchValue.trim() === ""
        ? filteredProducts
        : filteredProducts.filter((product) =>
            product.title.toLowerCase().includes(searchValue.toLowerCase())
          );

    // Update the page count based on filtered products
    setPageCount(Math.ceil(filtered.length / productsPerPage));

    // Display products for the first page after filtering
    const startIndex = 0;
    const endIndex = productsPerPage;
    setCurrentPageData(filtered.slice(startIndex, endIndex));
  }, [searchValue, filteredProducts]);

  const handlePageClick = (item) => {
    const selectedPage = item.selected;
    const startIndex = selectedPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    setCurrentPageData(filteredProducts.slice(startIndex, endIndex));
  };

  return (
    <>
      <div>
        <div className="p-[5rem]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[1.2rem]">
                Everything/{" "}
                <strong className="text-purple-800 category">{category}</strong>
              </h2>
            </div>
          </div>
          {/* Products Section */}
          <div>
            {currentPageData.length > 0 ? (
              <Cartitem
                grid_col_numbers={3}
                image_width={12}
                product={currentPageData}
              />
            ) : (
              <p>Loading products...</p>
            )}
          </div>
          {/* React Pagination */}
          <ReactPaginate
            breakLabel="..."
            nextLabel={
              <span>
                <MdOutlineArrowForwardIos size={18} />
              </span>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel={
              <span>
                <MdArrowBackIosNew size={18} />
              </span>
            }
            containerClassName="flex justify-center items-center gap-3 mt-20"
            pageClassName="block border border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md"
            pageLinkClassName="block w-10 h-10 flex items-center justify-center rounded-md"
            activeClassName="bg-purple-500 text-white"
            previousClassName="block border border-solid border-lightGray hover:bg-lightGray w-20 h-10 flex items-center justify-center rounded-md bg-purple-500 text-white"
            previousLinkClassName="block w-20 h-10 flex items-center justify-center rounded-md"
            nextClassName="block border border-solid border-lightGray hover:bg-lightGray w-20 h-10 flex items-center justify-center rounded-md bg-purple-500 text-white"
            nextLinkClassName="block w-20 h-10 flex items-center justify-center rounded-md"
          />
        </div>
      </div>
    </>
  );
};

export default Showall;
