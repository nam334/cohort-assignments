// ### **Adobe | Conceptual Round: Spread Operator Pitfall**

// **Question:** What will be logged? How do you fix this using the spread operator while keeping the code readable?

// const state = {
//   user: { id: 101, details: { city: 'Bangalore' } },
//   theme: 'dark'
// };

// const newState = {...state };
// newState.user.details.city = 'Chennai';

// console.log(state.user.details.city);
// // Expected output? Why did it change?

//ANSWER
//Because objects are reference types, they refer to the same memory location. The spread operator creates a
// shallow copy, not a deep copy, only top level properties are copied. User and details still refer to the
// same location in memory. Hence change in one effects the other.
