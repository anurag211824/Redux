// Action Types
 const CART_ADD_ITEM = "cart/addItem";
 const CART_REMOVE_ITEM = "cart/removeItem";
 const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItemQuantity";
 const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItemQuantity";

//Action Creators
export function addcartItem(productId, quantity){
  return { type: "CART_ADD_ITEM", payload: { productId, quantity } };
}
export function increaseCartItemQuantity(productId){
  return {type: "CART_ITEM_INCREASE_QUANTITY",payload: { productId}}
}
export  function decreaseCartItemQuantity(productId) {
  return { type: "CART_ITEM_DECREASE_QUANTITY", payload: { productId } };
}
export function removeCartItem(productId){
  return {type: "CART_REMOVE_ITEM", payload: { productId } }
}

//Reducer Function
export  function cartReducer(state = [], action) {
  switch (action.type) {
    case "CART_ADD_ITEM":
      return [...state, action.payload];
    case "CART_REMOVE_ITEM":
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );

    case "CART_ITEM_INCREASE_QUANTITY":
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
    case "CART_ITEM_DECREASE_QUANTITY":
      return state
        .map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return {...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return cartItem;
          }
        })
        .filter((cartItem) => cartItem.quantity > 0);

    default:
      return state;
  }
}
