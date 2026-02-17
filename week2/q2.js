// Question 2: ### **Microsoft | Technical Round: The Microtask Priority Riddle**

// **Question:** Predict the exact output.
// Explain why the `asyncFn` behaves differently than a standard promise chain.

// console.log('1 - Sync');

// setTimeout(() => {
//   console.log('2 - Macrotask');
// }, 0);

// async function asyncFn() {
//   console.log('3 - Inside Async');
//   await Promise.resolve();
//   console.log('4 - After Await');
// }

// asyncFn();

// Promise.resolve().then(() => {
//   console.log('5 - Microtask');
// });

//console.log('6 - Sync End');

//ANSWER

//OUTPUT
// 1 - Sync
// 6 - Sync End
// 3 - Inside Async
// 4 - After Await
// 5 - Microtask
// 2 - Macrotask

//Explain why the `asyncFn` behaves differently than a standard promise chain.

// - The difference between async function and a standard promise chain is only in terms of syntax.
//   In a promise chain, the code inside then block is executed asynchronously. Whereas in
//   case of async function, the code runs synchronously before it hits the await keyword . After await ,
//   the remaining code is scheduled as a microtask similar to a then useCallback.
