import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },

  // reducers: {
  //   fetchProducts(state) {
  //     state.loading = true;
  //   },
  //   fetchProductsError(state, action) {
  //     state.loading = false;
  //     state.error = action.payload || "Something went wrong";
  //   },
  //   updateAllProducts(state, action) {
  //     state.list = action.payload;
  //     state.loading = false;
  //     state.error = "";
  //   },
  // },
  // We commented the above code because we will use createAsyncThunk
  // to create async actions
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});


// This is a selector function that returns the list of products from the state
// It takes the state as an argument and returns the list of products
export const getAllProducts = (state) => state.products.list;
export const getProductLoadingState = (state) => state.products.loading;
export const getproductError = (state) => state.products.error;

// Thunk action creater
// export const fetchProductsData =()=> (dispatch)=>{
//   dispatch((dispatch)=>{
//    dispatch(fetchProducts())
//    fetch(`https://fakestoreapi.com/products`)
//    .then((res)=>res.json())
//    .then((data)=>{
//      dispatch(updateAllProducts(data))
//    })
//    .catch(()=>{
//      dispatch(fetchProductsError())
//    })
//   })
// }

// we commented the above code because we will use createAsyncThunk to fetch data from api
// 1. Import createAsyncThunk from Redux Toolkit
// 2. Create an async thunk for fetching products
// 3. Handle the pending, fulfilled, and rejected states in the slice
// 4. Use the thunk in your component
// 5. Dispatch the thunk action in your component

export const fetchProductsData = createAsyncThunk(
  "product/fetchProductItems",
  async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      return response.json();
    } catch (err) {
      throw err;
    }
  }
);

// export const { updateAllProducts, fetchProducts, fetchProductsError } =
//   slice.actions;
export default slice.reducer;
