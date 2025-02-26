let state={
    count: 0,
    name: "John Doe",
    age: 30,
    hobbies: ["reading", "painting"],
 
}
let previousState=state

function increment(){
    //** Mutating the Satate  **//
    //state.count=state.count + 1

    //** Not Mutating the state **//
    state={...state,count: state.count+1}
}
increment()
console.log(state);
increment()
console.log(state);
increment()
console.log(state);
increment()
console.log(state);
console.log(".......................");

console.log(previousState);
console.log(previousState===state);

