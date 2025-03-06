import { createSlice } from "@reduxjs/toolkit";

/**
 * Previously, we used action types and action creators manually.
 * This was necessary in plain Redux, but Redux Toolkit simplifies this process.
 * 
 * For example:
 * 
 * // Action types
 * const WISHLIST_ADD_ITEM = "wishlist/addWishlistItem";
 * const WISHLIST_REMOVE_ITEM = "wishlist/removeWishlistItem";
 * 
 * // Action creators
 * export function addWishListItem(productData) {
 *   return { type: WISHLIST_ADD_ITEM, payload: productData };
 * }
 * 
 * export function removeWishListItem(productId) {
 *   return { type: WISHLIST_REMOVE_ITEM, payload: { productId } };
 * }
 * 
 * // Reducer
 * export function wishListReducer(state = [], action) {
 *   switch (action.type) {
 *     case WISHLIST_ADD_ITEM:
 *       const previousAddedItem = state.find(
 *         (wishListItem) => wishListItem.productId === action.payload.productId
 *       );
 *       if (!previousAddedItem) {
 *         return [...state, action.payload];
 *       }
 *       return state;
 * 
 *     case WISHLIST_REMOVE_ITEM:
 *       return state.filter((item) => item.productId !== action.payload.productId);
 * 
 *     default:
 *       return state;
 *   }
 * }
 * 
 * With Redux Toolkit, we no longer need to manually define action types or action creators.
 * `createSlice` automatically generates them for us.
 */

// Create a slice using Redux Toolkit
const slice = createSlice({
  name: "wishlist", // Name of the slice
  initialState: [], // Initial state of the slice
  reducers: {
    // Reducer for adding an item to the wishlist
    addWishlistItem(state, action) {
      const previousAddedItem = state.find(
        (wishListItem) => wishListItem.productId === action.payload.productId
      );
      // If the item is not already in the wishlist, add it
      if (!previousAddedItem) {
        state.push(action.payload); // Directly mutate the state (Immer handles immutability)
      }
    },
    // Reducer for removing an item from the wishlist
    removeWishlistItem(state, action) {
      // Use filter to create a new array without the item to be removed
      return state.filter((item) => item.productId !== action.payload.productId);
    },
  },
});

// Export the generated action creators
export const { addWishlistItem, removeWishlistItem } = slice.actions;

// Export the reducer
export default slice.reducer;



// Key Points and Explanations

// 1. Why the Commented-Out Parts Were Used Previously:
// In plain Redux, you had to manually define:
// Action Types: Constants like WISHLIST_ADD_ITEM and WISHLIST_REMOVE_ITEM to avoid typos and ensure consistency.
// Action Creators: Functions like addWishListItem and removeWishListItem to encapsulate the logic of creating actions.
// Reducer: A function (wishListReducer) that handles state updates based on action types.
// This approach was verbose and error-prone, especially as the application grew.

//2. Why Redux Toolkit Simplifies This:
// createSlice:
// Automatically generates action types and action creators based on the reducers object.
// Uses Immer under the hood, allowing you to write "mutating" logic (e.g., state.push) while ensuring immutability.
// No Need for Manual Action Types or Creators:
// Redux Toolkit generates them for you, reducing boilerplate code.

//3.Why removeWishlistItem Returns a New State:
// While Redux Toolkit encourages direct state mutation (thanks to Immer), filtering an array is a 
// case where returning a new array is more intuitive and avoids confusion.
// Immer will still handle this correctly, so it’s safe to return a new array.

//4 .Consistency:
// The logic in createSlice matches the logic in the standalone reducer, ensuring the same behavior.
// For example, both versions check for duplicate items before adding and filter out the item to be removed.