import React from "react";
import axios from "axios";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import StarRatings from "react-star-ratings";
import PropTypes from "prop-types"; 
// import StarRatings from "./react-star-ratings";

const Cartitem = ({grid_col_numbers , image_width , product }) => {
   
  const dispatch = useDispatch();
  const { productList,products, cart, sum, Quantity, getItem } = useSelector(
    (state) => state.custom
  );
  console.log(productList);
  Cartitem.propTypes = {
    grid_col_numbers: PropTypes.number.isRequired,
    image_width: PropTypes.number.isRequired,
    products: PropTypes.array.isRequired, 
  };

      useEffect(()=>{
        const result =cart.reduce((acc,curr)=>{
         acc = acc+ parseInt(curr.quantity);
         return acc;
  },0)
       dispatch({type:"setSum" ,payload:result});

       localStorage.setItem("count" , sum);

  // console.log(cart);
  // console.log(result);

  },[cart,sum])

  useEffect(() => {
    const getItem = localStorage.getItem("count");
    dispatch({ type: "setGetItem", payload: getItem });

    // console.log(getItem)
    console.log("landing page");
  }, []);

  // const catchobject = (obj)=>{
  //   console.log("kasa diya nahi diya acha")
  //   localStorage.setItem("setProductObject" , JSON.stringify(obj))

  // }

  const func = () => {
    //  dispatch({ type: "setGetItem", payload: getItem + 1 });

    localStorage.setItem("count", parseInt(getItem) + 1);
    console.log("hello world");

  
  };
  const postCartland= (obj)=>{

   

    const duplicateValue = cart.filter((item)=> item.id === obj.id)

     if(duplicateValue[0]) {
        console.log("id already exists");   
        // console.log(parseInt(newvalue.quantity)) 
        // console.log((parseInt(quantityofitem.current.innerText)))
        // console.log(newvalue)
        
        let updatesum = ((parseInt(duplicateValue[0].quantity)) + 1)
        console.log(typeof(updatesum))

        const subtracttotal = ((parseFloat(duplicateValue[0].discountPercentage))/100)*(parseInt(duplicateValue[0].price))
        const subtotal = (parseInt(duplicateValue[0].price))-subtracttotal;
        const finaltotal = subtotal*updatesum; 
        
         
          
        const addQuantity = {...obj, quantity: updatesum , subtotal:finaltotal};
        const updateaddquantity = cart.map((item)=> item.id === duplicateValue[0].id? addQuantity : item)
        dispatch({type:"setCarts" , payload: updateaddquantity})
        console.log(addQuantity);
        axios.patch("http://localhost:3000/carts/" + duplicateValue[0].id, addQuantity);
    
    }
    else
    {
      console.log("it is post method")
      const subtracttotal = ((parseFloat(obj.discountPercentage))/100)*(parseInt(obj.price))
      const subtotal = (parseInt(obj.price))-subtracttotal;
      const finaltotal = subtotal*Quantity; 
       
      const newvalue = {...obj, quantity: Quantity , subtotal: finaltotal}
      
      const newArray = [...cart , newvalue];

      dispatch({type:"setCarts" , payload:newArray})
  
      axios.post("http://localhost:3000/carts" , newvalue)

      dispatch({type:"setQuantity" , payload:1})
    }
  }

  // const postCartland = (obj) => {
  //   const subtracttotal =(parseFloat(obj.discountPercentage) / 100) * parseInt(obj.price);
  //   const subtotal = parseInt(obj.price) - subtracttotal;
  //   const finaltotal = subtotal * Quantity;

  //   console.log(Quantity);

  //   // console.log(finaltotal)
  //   const newvalue = { ...obj, quantity: Quantity, subtotal: finaltotal };
  //   console.log(obj);
  //   const newArray = [...cart, newvalue];
  //   dispatch({ type: "setCarts", payload: newArray });
  //   axios.post("http://localhost:3000/carts", newvalue);
  // };

  return (
    <div className={`mt-[3rem] grid grid-cols-1 gap-5 md:grid md:grid-cols-2 md:gap-10 lg:grid lg:grid-cols-${grid_col_numbers} lg:gap-20 `}>
      {product && product.length > 0 ? (
        product.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] text-center"
          >
            <div>
              <Link to={`/landing/product/${item.id}`}>
                <img
                  className={`w-full h-[10rem] md:h-[12rem] lg:h-[${image_width}rem] rounded-t-xl object-fill`}
                  src={`${item.images[0]}`}
                  alt={item.description}
                  onClick={() => {
                    dispatch({ type: "setNone", payload: 1 });
                    // catchobject(item)
                  }}
                />
              </Link>
            </div>
  
            <div className="p-4 md:p-5">
              <h1 className="text-gray-800 dark:text-white text-[1.3rem]">
                {item.title}
              </h1>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Price: ${item.price}
              </h3>
              <p>{item.category}</p>
  
              <div>
                <StarRatings
                  rating={item.rating}
                  starRatedColor="rgba(0,0,20,10)"
                  starDimension="20px"
                  starSpacing="2px"
                  numberOfStars={5}
                  name='rating'
                />
              </div>
  
              <button
                onClick={() => {
                  postCartland(item);
                  func();
                  dispatch({type:"setOffcanvas" , payload : true})
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 mt-3 text-sm font-semibold text-white transition-all bg-purple-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                href="#"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        ''
      )}
    </div>
  );
  
};

export default Cartitem;

{
  /* <div className="shadow shadow-gray-300 p-3  w-[20rem] text-center rounded-xl">
<img
  className="w-[100%] h-[20rem] object-fill"
  src={`${item.images[0]}`}
  alt="Card image cap"
/>
<div className="card-body">
  <h2 className="font-normal text-[1.3rem]">{item.title}</h2>
  <p>Price:{item.price}</p>

  <Button
    defaultdefaultdefaultValue="Add To Cart"
    color="blue"
    vertical={2}
    horizontol={12}
    text_color="white"
  />
</div>
</div> */
}
