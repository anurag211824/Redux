import { createStore } from "redux"; // Import createStore from Redux

// Define action types as constants to avoid hardcoded strings
const POST_INCREMENT = "POST_INCREMENT";
const POST_DECREMENT = "POST_DECREMENT";
const POST_INCREMENTBY = "POST_INCREMENTBY";
const POST_DECREMENTBY = "POST_DECREMENTBY";

// Define the initial state
const initialState = {
  post: 0,
  name: "Anurag Kumar",
  age: 21,
  email: "anurag.kumar@gmail.com",
};

// Store previous state reference (not used for mutations, just for tracking)
let previousState = initialState;

// Reducer function to handle actions and update state
function reducer(state = initialState, action) {
  switch (action.type) {
    case POST_INCREMENT:
      // Increase post count by 1
      return { ...state, post: state.post + 1 };

    case POST_DECREMENT:
      // Decrease post count by 1
      return { ...state, post: state.post - 1 };

    case POST_INCREMENTBY:
      // Increase post count by specified payload value
      return { ...state, post: state.post + action.payload };

    case POST_DECREMENTBY:
      // Decrease post count by specified payload value
      return { ...state, post: state.post - action.payload };

    default:
      // Return the existing state if no recognized action is dispatched
      return state;
  }
}

//Create a Redux store with the reducer function
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store); // Log the store object

//Subscribe to store changes and log the updated state
store.subscribe(() => {
  console.log("State changed", store.getState());
});

//Dispatch different actions to modify state
store.dispatch({ type: POST_INCREMENT }); // Increment post by 1
store.dispatch({ type: POST_DECREMENT }); // Decrement post by 1
store.dispatch({ type: POST_INCREMENTBY, payload: 10 }); // Increment post by 10
store.dispatch({ type: POST_DECREMENTBY, payload: 5 }); // Decrement post by 5

// Log previous state to track changes
console.log("OurPreviousState", previousState);

const mystore = myCreateStore(reducer);
console.log(mystore);

/*_______________________________________________________________________________________________________________________*/

import { myCreateStore } from "./myRedux";
mystore.subscribe(() => {
  console.log("State changed", mystore.getState());
});
const unsubscribe = mystore.subscribe(() => {
  console.log("hello world");
});

mystore.dispatch({ type: POST_INCREMENT });
unsubscribe();
mystore.dispatch({ type: POST_DECREMENT });
mystore.dispatch({ type: POST_INCREMENTBY, payload: 10 });

/*_______________________________________________________________________________________________________________________*/

/*import { store, increment, decrement, incrementBy, decrementBy } from "./store.js";

// Select DOM Elements
const postCount = document.getElementById("postCount");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const incrementByBtn = document.getElementById("incrementBy");
const decrementByBtn = document.getElementById("decrementBy");

// Subscribe to Store Changes
store.subscribe(() => {
    const state = store.getState();
    postCount.textContent = `Post Count: ${state.post}`;
});

// Event Listeners
incrementBtn.addEventListener("click", () => store.dispatch(increment()));
decrementBtn.addEventListener("click", () => store.dispatch(decrement()));
incrementByBtn.addEventListener("click", () => store.dispatch(incrementBy(10)));
decrementByBtn.addEventListener("click", () => store.dispatch(decrementBy(5)));
*/
