let reduxState = {
  post: 0,
  name: "Anurag Kumar",
  age: 21,
  email: "anurag.kumar@gmail.com",
};

let previousState = reduxState;

function reducer(state, action) {
  if (action.type === "POST_INCREMENT") {
    return { ...state, post: state.post + 1 }; // Ensures immutability
  } else if (action.type === "POST_DECREMENT") {
    return { ...state, post: state.post - 1 }; // Ensures immutability
  }
  else if(action.type === "POST_INCREMENTBY"){
         return {...state, post: state.post + action.payload }; // Ensures immutability
  
  }
  return state; // If action type is not recognized, return original state
}

//console.log(reducer(reduxState, { type: "POST_INCREMENT" })); // Follows Redux naming convention
reduxState = reducer(reduxState, { type: "POST_INCREMENT" }); // Simulating Redux behavior
console.log("changedState", reduxState);
reduxState = reducer(reduxState, { type: "POST_INCREMENT" });
console.log("changedState", reduxState);
reduxState = reducer(reduxState, { type: "POST_INCREMENT" });
console.log("changedState", reduxState);
reduxState = reducer(reduxState, { type: "POST_INCREMENT" });
console.log("changedState", reduxState);
reduxState = reducer(reduxState, { type: "POST_DECREMENT" });
console.log("changedState", reduxState);
reduxState = reducer(reduxState, { type: "POST_DECREMENT" });
console.log("changedState", reduxState);
reduxState = reducer(reduxState, { type: "POST_INCREMENT" });
console.log("changedState", reduxState);
reduxState = reducer(reduxState, { type: "POST" });
console.log("changedState", reduxState);
reduxState=reducer(reduxState,{type:'POST_INCREMENTBY',payload:2})
console.log("changedState", reduxState);
reduxState=reducer(reduxState,{type:'POST_INCREMENTBY',payload:2})
console.log("changedState", reduxState);
reduxState=reducer(reduxState,{type:'POST_INCREMENTBY',payload:2})
console.log("changedState", reduxState);
reduxState=reducer(reduxState,{type:'POST_INCREMENTBY',payload:2})
console.log("changedState", reduxState);



console.log("previousState", previousState);

if (previousState !== reduxState) {
  console.log("State has changed not mutating"); // Expected output
} else {
  console.log("State has not changed");
}
