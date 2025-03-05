import { combineReducers, createStore } from "redux";
import  {cartReducer}  from "./slices/cartReducer.js";
import { wishListReducer } from "./slices/wishListReducer.js";
import { productReducer } from "./slices/productsReducer.js";
import {produce} from "immer"



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
console.log(store.getState());


const users=[
  {
   name:"Anurag Kumar",
   age:21,
  },
  {
  name:"Abinav",
  age:"20",
  },
  {
  name:"Deepak",
  age:"24",
  },
  {
   name:'Aarsh Mall',
   age:22,
  }
]

// const newUsers=users.map((user,id)=>{
//   if(id==2){
//     return {...user,age:19}
//   }
//   return user
// })



// const newUsers=produce(users,(usersCopy)=>{
//   console.log(usersCopy)
//   usersCopy[1].age=19
// })

// console.log(users);
// console.log(newUsers);




