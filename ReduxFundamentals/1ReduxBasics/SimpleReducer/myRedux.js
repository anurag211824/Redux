// Function to create a simple Redux-like store
export function myCreateStore(reducer) {
    let state; // Holds the current state of the store
    const listeners = []; // Array to store subscriber functions
  
    const store = {
      // Returns the current state
      getState() {
        return state;
      },
  
      // Dispatches an action to update the state using the reducer
      dispatch(action) {
        state = reducer(state, action); // Call the reducer to get the new state
        listeners.forEach((listener) => listener()); // Notify all subscribers
      },
  
      // Subscribes a listener function to be called when the state changes
      subscribe(listener) {
        listeners.push(listener); // Add listener to the array
  
        // Returns an unsubscribe function to remove the listener
        return function () {
          const listenersIndex = listeners.findIndex(
            (registeredListener) => registeredListener === listener
          );
          listeners.splice(listenersIndex, 1); // Remove the listener from the array
        };
      },
    };
  
    // Initialize the store with a default action to set the initial state
    store.dispatch({ type: "@@INIT" });
  
    return store; // Return the store object
  }
  