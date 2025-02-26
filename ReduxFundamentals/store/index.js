import { combineReducers, createStore } from "redux";
import { cartReducer } from "./cartReducer.js";
import { wishListReducer } from "./wishListReducer.js";
import { productReducer } from "./productsReducer.js";
import { addcartItem } from "./cartReducer.js";
import { increaseCartItemQuantity } from "./cartReducer.js";
import {decreaseCartItemQuantity} from './cartReducer.js'
import { removeCartItem } from "./cartReducer.js";
import { addWishListItem } from "./wishListReducer.js";
import { removeWishListItem } from "./wishListReducer.js"


// const initialState = {
//   products: productList,
//   cartItems: [],
//   wishList: [],
// };

const reducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishList: wishListReducer
});
console.log(reducer);

/*function reducer(state = initialState, action) {
  // console.log(state);
  // console.log(action);

  switch (action.type) {
    case "CART_ADD_ITEM":
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case "CART_REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };

    case "CART_ITEM_INCREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else {
            return cartItem;
          }
        }),
      };
    case "CART_ITEM_DECREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return cartItem;
          }
        }).filter((cartItem)=>cartItem.quantity>0),
      };
      case "WISHLIST_ADD_ITEM":
        return {...state,wishList:[...state.wishList,action.payload]}
      case "WISHLIST_REMOVE_ITEM":
        return {...state,wishList:state.wishList.filter((wishListItem)=>{
            return wishListItem.productId!==action.payload.productId
        })}

    default:
      return state;
  }

  return state;
}
*/
export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store);
// Dispatch actions to test the Redux store
store.dispatch(addcartItem(1, 2)); // Add item with productId 1 and quantity 2
store.dispatch(addcartItem(2, 1)); // Add item with productId 2 and quantity 1
store.dispatch(addcartItem(3, 5)); // Add item with productId 3 and quantity 5
store.dispatch(increaseCartItemQuantity(1)); // Increase quantity of item with productId 1
store.dispatch(increaseCartItemQuantity(3)); // Increase quantity of item with productId 3
store.dispatch(decreaseCartItemQuantity(3)); // Decrease quantity of item with productId 3
store.dispatch(removeCartItem(2)); // Remove item with productId 2

store.dispatch(addWishListItem(1));
store.dispatch(addWishListItem(2));
store.dispatch(addWishListItem(3));
store.dispatch(addWishListItem(4));
store.dispatch(removeWishListItem(4));
console.log(store.getState());

