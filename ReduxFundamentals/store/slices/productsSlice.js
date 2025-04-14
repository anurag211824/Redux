import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    list: [],
    error:"",
  },

  reducers: {
    fetchProducts(state) {
      state.loading = true;
    },
    fetchProductsError(state,action){
      state.loading=false;
      state.error=action.payload || "Something went wrong";
    },
    updateAllProducts(state, action) {
      state.list = action.payload;
      state.loading=false;
      state.error=""
    },
  },
});

// This is a selector function that returns the list of products from the state
// It takes the state as an argument and returns the list of products
export const getAllProducts = (state) => state.products.list
export const getProductLoadingState = (state) => state.products.loading
export const getproductError = (state) => state.products.error


// Thunk action creater
export const fetchProductsData =()=> (dispatch)=>{
  dispatch((dispatch)=>{
   dispatch(fetchProducts())
   fetch(`https://fakestoreapi.com/products`)  
   .then((res)=>res.json())
   .then((data)=>{
     dispatch(updateAllProducts(data))
   })
   .catch(()=>{
     dispatch(fetchProductsError()) 
   })
  })
}



export const { updateAllProducts,fetchProducts,fetchProductsError } = slice.actions;
export default slice.reducer;