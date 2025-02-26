/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [state, setState] = useState({ count: 0,counterName: "Timer"});

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            ///** Not Mutating the state **//
            // setState({...state ,count:state.count+1})

          setState((previousState)=>(
            {...previousState, count: previousState.count + 1, counterName: previousState.counterName + " (Updated)"})
          )

              //** Mutating the Satate  **//
            // state.count = state.count + 1;
            // console.log(state);
            // setState(state)
          }}
        >
          count is {state.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR {state.counterName}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;



// Yes, your updated code is correct, and it follows the proper way to update state in React. Let’s break it down:

// ✅ Correct Approach (Not Mutating State)
// setState({ ...state, count: state.count + 1 });
// This creates a new object with the updated count value.
// Since the state object reference changes, React detects the update and re-renders the component.

// ❌ Wrong Approach (Mutating State)
// state.count = state.count + 1;
// console.log(state);
// setState(state);
// This modifies the existing object instead of creating a new one.
// React does not detect the change because the reference to state remains the same.
// The UI will not update as expected.


// Key Takeaways
// State should never be mutated directly (state.count = state.count + 1).
// Always use setState({...state, updatedValue}) to create a new object reference.
// If you need to update state based on the previous state, use the functional update:
// setState(prev => ({ ...prev, count: prev.count + 1 }));
// This ensures updates are correct even if multiple state updates happen asynchronously.
// Your implementation using:

// setState({...state ,count:state.count+1})
// is correct and recommended ✅. 🚀