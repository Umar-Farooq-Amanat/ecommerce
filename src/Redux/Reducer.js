import { createReducer } from "@reduxjs/toolkit";

const initialstate = {
  products: [],
  cart:[],
  currentPage: 1,
  single_product: {},
  increment_decrement: 1,
  c: "",
  totalpage:0,
  start:1,
  end:20,
  total:0,
  searchValue:"",
  category:"",
  filterValue:"",
  priceSort:"",
  order:"",
  mansoor:{},
  Quantity:1,
  totalcartitem:0,
  sum:0,
  tayyab:1,
  umar:{},
  checkoutTotal:0,
  getItem:0,
  testingobj:{},
  offCanvas: true,
  offcanvasobject:[]

};
 export const customReducer = createReducer(initialstate, {
 
  setProducts: (state, action) => {
    state.products = action.payload;
  },
  setCarts: (state, action) => {
    state.cart = action.payload;
  },
  setCurrentpage: (state, action) => {
    state.currentPage = action.payload;
  },
  setSingleProduct: (state, action) => {
    state.single_product = action.payload;
  },
  setIncrement: (state) => {
    state.increment_decrement = state.increment_decrement + 1;
  },
  setDecrement: (state) => {
    if (state.increment_decrement > 1) {
      state.increment_decrement = state.increment_decrement - 1;
    }
  },
  setNone:(state,action)=>{
      state.increment_decrement = action.payload
  },
  setSmartphone:(state)=>{
    state.c = "/category/smartphones"
  }
  ,
  setGroceries:(state)=>{
    state.c = "/category/groceries"
  },
  setShowall:(state)=>{
    state.c = ""
  },
  setTotalpages:(state,action)=>{
    state.totalpage = action.payload;
  },
  setStart:(state,action)=>{
      state.start = action.payload;
  },
  setEnd:(state,action)=>{
      state.end = action.payload
  },
  setTotal:(state,action)=>{
      state.total = action.payload
  },
  setSearchvalue:(state,action)=>{
    state.searchValue = action.payload
  },
  setFilterValue:(state,action)=>{
      state.filterValue = action.payload
  },
  setCategory:(state,action)=>{
    state.category = action.payload
  },
  setSortByPrice:(state,action)=>{
    state.priceSort= action.payload
  },
  setAscending:(state,action)=>{
    state.order = action.payload;
  },
  setDescending:(state,action)=>{
    state.order = action.payload;
  },
  setMansoor:(state,action)=>{
    state.mansoor = action.payload
  },
  setQuantity:(state,action)=>{
    state.Quantity = action.payload
  },
  setTotalcartitem:(state,action)=>{
       state.totalcartitem = action.payload
  },
  setSum:(state,action)=>{
    state.sum = action.payload
  },
  setCheckoutsubtotal:(state,action)=>{
    state.checkoutTotal = action.payload
  },
  setGetItem:(state,action)=>{
    state.getItem = action.payload;
  },
  setOffcanvas:(state,action)=>{
    state.offCanvas = action.payload
  },
  setOffcanvasObject:(state,action)=>{
    state.offcanvasobject = action.payload
  }
});
