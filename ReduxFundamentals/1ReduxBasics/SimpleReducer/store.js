import { createStore } from "redux";

// Action Types
const POST_INCREMENT = "POST_INCREMENT";
const POST_DECREMENT = "POST_DECREMENT";
const POST_INCREMENTBY = "POST_INCREMENTBY";
const POST_DECREMENTBY = "POST_DECREMENTBY";

// Initial State
const initialState = { post: 0 };

// Reducer Function
function reducer(state = initialState, action) {
    switch (action.type) {
        case POST_INCREMENT:
            return { ...state, post: state.post + 1 };
        case POST_DECREMENT:
            return { ...state, post: state.post - 1 };
        case POST_INCREMENTBY:
            return { ...state, post: state.post + action.payload };
        case POST_DECREMENTBY:
            return { ...state, post: state.post - action.payload };
        default:
            return state;
    }
}

// Enable Redux DevTools
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };

// Export Actions
export const increment = () => ({ type: POST_INCREMENT });
export const decrement = () => ({ type: POST_DECREMENT });
export const incrementBy = (value) => ({ type: POST_INCREMENTBY, payload: value });
export const decrementBy = (value) => ({ type: POST_DECREMENTBY, payload: value });
