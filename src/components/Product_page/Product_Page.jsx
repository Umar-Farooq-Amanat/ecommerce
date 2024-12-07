import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import Button from "../Button";
import { Link, useParams } from "react-router-dom";
import { useRef } from "react";

const Product_Page = () => {
  
  const { products, increment_decrement, cart, Quantity, sum } = useSelector((state) => state.custom);
  const dispatch = useDispatch();
  const quantityofitem = useRef(null);
  const param = useParams(); 

   console.log(param.id)
 
   
    
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

      useEffect(()=>{
        
        const getItem = localStorage.getItem("count");
        dispatch({type:"setGetItem" , payload: getItem})

        // console.log(getItem)
        
    })

    const value = useMemo(()=>{ 
  
      const filterproduct = products.filter((fil)=> fil.id == param.id);
      console.log(filterproduct[0])
      console.log("error occured")
      return filterproduct[0];
    },[param.id]);
  

    const increment = () => {
      dispatch({type:"setIncrement"})

      dispatch({ type: "setQuantity" , payload: ((parseInt(quantityofitem.current.innerText))+1)})

      // console.log(parseInt(quantityofitem.current.innerText)+1)
    };
    const decrement = () => {

      dispatch({type:"setDecrement"})
    

      if(parseInt(quantityofitem.current.innerText)>1)
      {
        dispatch({ type: "setQuantity" , payload: ((parseInt(quantityofitem.current.innerText))-1) });
        // console.log((parseInt(quantityofitem.current.innerText))-1)
      }
    };

    const postCart= ()=>{

   

      const duplicateValue = cart.filter((item)=> item.id === value.id)

       if(duplicateValue[0]) {
          console.log("id already exists");   
          // console.log(parseInt(newvalue.quantity)) 
          // console.log((parseInt(quantityofitem.current.innerText)))
          // console.log(newvalue)
          
          let updatesum = ((parseInt(duplicateValue[0].quantity)) + (parseInt(quantityofitem.current.innerText)))
          console.log(typeof(updatesum))

          const subtracttotal = ((parseFloat(duplicateValue[0].discountPercentage))/100)*(parseInt(duplicateValue[0].price))
          const subtotal = (parseInt(duplicateValue[0].price))-subtracttotal;
          const finaltotal = subtotal*updatesum;
          
          
            
          const addQuantity = {...value, quantity: updatesum , subtotal:finaltotal};

          const updateaddquantity = cart.map((item)=> item.id === duplicateValue[0].id? addQuantity : item)
          dispatch({type:"setCarts" , payload: updateaddquantity})
          console.log(addQuantity);
          axios.patch("http://localhost:3000/carts/" + duplicateValue[0].id, addQuantity);
      
      }
      else
      {
        console.log("it is post method")
        const subtracttotal = ((parseFloat(value.discountPercentage))/100)*(parseInt(value.price))
        const subtotal = (parseInt(value.price))-subtracttotal;
        const finaltotal = subtotal*Quantity; 
         
        const newvalue = {...value, quantity: Quantity , subtotal: finaltotal}
        
        const newArray = [...cart , newvalue];

        dispatch({type:"setCarts" , payload:newArray})
    
        axios.post("http://localhost:3000/carts" , newvalue)

        dispatch({type:"setQuantity" , payload:1})
      }
    }


  return (
    <>

    {/* <h1>{sum}</h1> */}
 
       <div className="bg-purple-100 w-[100%] ">
        {/* <div className="flex max-w-[80%] mx-auto justify-between items-center pt-5">
          <p>your product has been added to cart</p>
          <button className="px-16 py-4 bg-blue-500 text-white text-[1.2rem]"><Link to="/landing/cart">View Cart </Link> </button>
        </div> */}
        <div className="flex max-w-[80%] justify-center items-center  mx-auto gap-16 py-16">
          <div className="w-[50%] pt-20">
            <img
              src={`${value.images[0]}`}
              className="w-[50%rem] h-[35rem]"
              alt="Image error"
            /> 

            {/* <div>
              {single_product.images.map((item,index) => {
                return (
                  <img
                    src={`${item}`}
                    className="w-[50%rem] h-[35rem]"
                    alt="hello"
                  />
                );
              })}
            </div> */}
           </div>
          <div className="w-[50%]">
            <div className="leading-[4rem]">
              <p className="text-[1.2rem]">{value.category}</p>
              <h1 className="font-semibold text-[3rem]">
                {value.title}
              </h1>
              <h2 className="font-normal text-[2rem]">
                Price: ${value.price}
                <span className="text-[1.3rem]">+ free shipping</span>
              </h2>
              <h2 className="font-normal text-[1.4rem]">
                Discount Percentage: {value.discountPercentage}%
              </h2>
              <p className="text-[1.2rem] leading-7">
                {value.description}
              </p>
            </div>
            <div className="flex gap-1 my-5">
              <Button
                value="-"
                color="blue"
                horizontol={4}
                vertical={1}
                clickfunction={decrement}
              />
              <button className="mx-2" ref={quantityofitem}>{increment_decrement}</button>
              <Button
                value="+"
                color="blue"
                horizontol={4}
                vertical={1}
                clickfunction={increment}
              />

              <button className="px-16 py-1 ml-10 text-white bg-purple-500" onClick={()=>{
                postCart(); 
                
                
               
                }}>
                Add to Cart
              </button>
            </div>

            <p>SKU N/A Categories : {value.category}</p>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Product_Page;
