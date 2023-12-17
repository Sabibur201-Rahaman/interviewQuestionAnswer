// function getInfo(obj,year){
// obj.name='Sumon';
// year=2023;
// }

// const person={name:"Rahim",year:2022};
// const year=2000;
// getInfo(person,year)
// console.log(person.name)
// console.log(year)

// REDUX

/* import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

*/

function incrementByAmountReducer(state, action) {
  // Check if the action type is 'incrementByAmount'
  if (action.type === "incrementByAmount") {
    // Update the state by adding the payload
    state.value += action.payload;
  }
}

// Example usage:
const initialState = { value: 0 };
const action = { type: "incrementByAmount", payload: 5 };

// Call the function with the current state and action
incrementByAmountReducer(initialState, action);

console.log(initialState.value); // Output: 5
