// Action Types
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItemQuantity";
const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItemQuantity";
import {produce} from "immer";

//Action Creators
export function addCartItem(productData) {
  return { type: CART_ADD_ITEM, payload: productData };
}
export function increaseCartItemQuantity(productId) {
  return { type: CART_ITEM_INCREASE_QUANTITY, payload: { productId } };
}
export function decreaseCartItemQuantity(productId) {
  return { type: CART_ITEM_DECREASE_QUANTITY, payload: { productId } };
}
export function removeCartItem(productId) {
  return { type: CART_REMOVE_ITEM, payload: { productId } };
}

//Reducer Function
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


// We use Immer in JavaScript and React projects to handle immutable state updates in a simpler and more readable way. 
// It allows us to write mutative code while actually performing immutable updates under the hood.


//using immmer js library
export function cartReducer(originalState = [], action) {
  return produce(originalState, (state) => {
    const existingItemIndex = state.findIndex(
      (cartItem) => cartItem.productId === action.payload.productId
    );
    switch (action.type) {
      case CART_ADD_ITEM:
        if (existingItemIndex !== -1) {
          state[existingItemIndex].quantity+=1
        break
        }
        state.push({...action.payload,quantity:1})
      break
      case CART_REMOVE_ITEM:
       state.splice(existingItemIndex,1)
     break

      case CART_ITEM_INCREASE_QUANTITY:
        state[existingItemIndex].quantity+=1
      break
      case CART_ITEM_DECREASE_QUANTITY:
        state[existingItemIndex].quantity-=1
        if(state[existingItemIndex].quantity===0){
          state.splice(existingItemIndex,1);
        }
      break
        

      default:
      break
    }
    return state
  });
}
