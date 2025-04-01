// 1. Action Types
// const CART_ADD_ITEM = "cart/addCartItem";
// const CART_REMOVE_ITEM = "cart/removeCartItem";
// const CART_ITEM_INCREASE_QUANTITY = "cart/increaseCartItemQuantity";
// const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseCartItemQuantity";
// import { produce } from "immer";
import { createSelector, createSlice } from "@reduxjs/toolkit";

// 2. Action Creators
//....................................................................
// export function addCartItem(productData) {
//   return { type: CART_ADD_ITEM, payload: productData };
// }
// export function increaseCartItemQuantity(productId) {
//   return { type: CART_ITEM_INCREASE_QUANTITY, payload: { productId } };
// }
// export function decreaseCartItemQuantity(productId) {
//   return { type: CART_ITEM_DECREASE_QUANTITY, payload: { productId } };
// }
// export function removeCartItem(productId) {
//   return { type: CART_REMOVE_ITEM, payload: { productId } };
// }
//....................................................................

// 3. Reducers
//..............................................................................................
// 3.1 Normal Reducer Function
// export function cartReducer(state = [], action) {
//   switch (action.type) {
//     case CART_ADD_ITEM:
//       const existingItem = state.find(
//         (cartItem) => cartItem.productId === action.payload.productId
//       )
//       if (existingItem) {
//         return state.map((cartItem) => {
//           if (cartItem.productId === existingItem.productId) {
//             return { ...cartItem, quantity: cartItem.quantity + 1 }
//           }
//           return cartItem
//         })
//       }
//       return [...state, { ...action.payload, quantity: 1 }]
//     case CART_REMOVE_ITEM:
//       return state.filter(
//         (item) => item.productId !== action.payload.productId
//       );

//     case CART_ITEM_INCREASE_QUANTITY:
//       return state.map((cartItem) => {
//         if (cartItem.productId === action.payload.productId) {
//           return { ...cartItem, quantity: cartItem.quantity + 1 };
//         }
//         return cartItem;
//       });
//     case CART_ITEM_DECREASE_QUANTITY:
//       return state
//         .map((cartItem) => {
//           if (cartItem.productId === action.payload.productId) {
//             return { ...cartItem, quantity: cartItem.quantity - 1 };
//           } else {
//             return cartItem;
//           }
//         })
//         .filter((cartItem) => cartItem.quantity > 0);

//     default:
//       return state;
//   }
// }
//..............................................................................................

//..............................................................................................
// 3.2 Reducer usinf immer js library
// We use Immer in JavaScript and React projects to handle immutable state updates in a simpler and more readable way.
// It allows us to write mutative code while actually performing immutable updates under the hood.

//reducer Function using immmer js library
// function cartReducer(originalState = [], action) {
//   return produce(originalState, (state) => {
//     const existingItemIndex = state.findIndex(
//       (cartItem) => cartItem.productId === action.payload.productId
//     );
//     switch (action.type) {
//       case CART_ADD_ITEM:
//         if (existingItemIndex !== -1) {
//           state[existingItemIndex].quantity += 1;
//           break;
//         }
//         state.push({ ...action.payload, quantity: 1 });
//         break;
//       case CART_REMOVE_ITEM:
//         state.splice(existingItemIndex, 1);
//         break;

//       case CART_ITEM_INCREASE_QUANTITY:
//         state[existingItemIndex].quantity += 1;
//         break;
//       case CART_ITEM_DECREASE_QUANTITY:
//         state[existingItemIndex].quantity -= 1;
//         if (state[existingItemIndex].quantity === 0) {
//           state.splice(existingItemIndex, 1);
//         }
//         break;

//       default:
//         break;
//     }
//     return state;
//   });
// }
//..............................................................................................

//..............................................................................................
// 3.3 Reducer using Redux Toolkit using CreateSlice
//CreateSlice function is used to create Action Types, Action Creaters and Reducers

function findItemIndex(state, action) {
  return state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );
}
const slice = createSlice({
  name: "cart",
  initialState:{
    loading:false,
    list:[],
    error: "",
  },
  reducers: {
    fetchCartItems(state){
    state.loading = true;
    },
    fetchCartItemsError(state, action){
      state.loading = false;
      state.error = action.payload || "Something went wrong";
    },
    loadCartItems(state, action) {
      state.list = action.payload.products;
      state.loading = false;
    },
    addCartItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      if (existingItemIndex !== -1) {
        state.list[existingItemIndex].quantity += 1;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      if (existingItemIndex !== -1) {
        state.list.splice(existingItemIndex, 1);
      }
    },
    increaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      if (existingItemIndex !== -1) {
        state.list[existingItemIndex].quantity += 1;
      }
    },
    decreaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex !== -1) {
        state.list[existingItemIndex].quantity -= 1;
        if (state.list[existingItemIndex].quantity === 0) {
          state.list.splice(existingItemIndex, 1);
        }
      }
    },
  },
});
//.................................................................................................
console.log(slice.actions.addCartItem());

// Exporting action Creaters
export const {
  addCartItem,
  removeCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  loadCartItems,
  fetchCartItems,
  fetchCartItemsError,
} = slice.actions;


//Selector getCartItems returned a different result when called with the same parameters. T
// his can lead to unnecessary rerenders.Selectors that return a new reference (such as 
// an object or an array) should be memoized: 
const getCartItems = ({ products, cartItems }) => {
  const updatedCart = cartItems.list.map(({ productId, quantity }) => {
    const cartProduct = products.list.find((product) => product.id === productId)
    return cartProduct ? { ...cartProduct, quantity } : null
  }).filter(item => item !== null)

  console.log("Updated Cart Items:", updatedCart) // Console log inside useSelector
  return updatedCart
}
// memoization of getCartItems function
export const getAllCartItems = createSelector(getCartItems,(state)=>state)
export const getCartLoadingState = (state) => state.cartItems.loading
export const getCartError = (state) => state.cartItems.error
// Exporting the reducer
export default slice.reducer;
