// Question 1: ### **Uber | Machine Coding: Asynchronous Task Runner (Concurrency Limit)**

// **Question:** Imagine Uber is fetching data for 100 nearby drivers. To avoid hitting API rate limits or
// crashing the browser with too many simultaneous requests, you must implement a
// "Batch Runner."

// Write a function `promiseAllWithConcurrencyLimit` that takes an array of "task functions" (functions that
// return a promise) and a limit `limit`. It should execute no more than `limit` tasks
// at any given time. As soon as one task finishes, the next one in the queue should start.

// /**
//  * @param {Array<() => Promise<any>>} tasks - Array of functions returning promises
//  * @param {number} limit - Maximum concurrent executions
//  */
// async function promiseAllWithConcurrencyLimit(tasks, limit) {
//   // TODO: Your implementation
// }

// // --- Input Data for Testing ---
// const createDriverTask = (id, delay) => () =>
//   new Promise((resolve) => {
//     console.log(` Fetching Driver ${id}...`);
//     setTimeout(() => {
//       console.log(` Driver ${id} loaded`);
//       resolve(`Data for Driver ${id}`);
//     }, delay);
//   });

// const tasks =;

// // If limit is 2, Task 1 and 2 start.
// // When Task 2 finishes at 0.5s, Task 3 starts immediately.
// promiseAllWithConcurrencyLimit(tasks, 2).then(results => {
//   console.log("All tasks completed:", results);
// });

//ANSWER
async function promiseAllWithConcurrencyLimit(tasks, limit) {
  // TODO: Your implementation
  return new Promise((resolve, reject) => {
    //final resultant array to store results
    const promiseResults = new Array(tasks.length);
    let //keeps track of current task
      currentPromiseCount = 0,
      //keeps track of total tasks run
      completedPromiseCount = 0,
      //keeps track of nxt task to run
      currentIndex = 0;
    function runNextPromise() {
      while (currentPromiseCount < limit && currentIndex < tasks.length) {
        //currentPromiseCount < limit -> keeps chk of limit, we allow upto limit tasks at a time
        //currentIndex < tasks.limit -> chks if limit > tasks, this chk ensures no unnecessary funtion calls are made
        const index = currentIndex;
        const task = tasks[currentIndex];
        currentIndex++;
        currentPromiseCount++;
        task()
          .then((result) => {
            promiseResults[index] = result;
            completedPromiseCount++;
          })
          .catch(reject)
          .finally(() => {
            currentPromiseCount--;
            if (completedPromiseCount === tasks.length) resolve(promiseResults);
            else runNextPromise();
          });
      }
    }
    runNextPromise();
  });
}

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

// ### **Meta (Facebook) | Technical Trivia: Context in Arrow Functions**

// **Question:** What will be the output? Can the context of `greet` be changed using `.call()`? Why or why not?

// const profile = {
//   userName: "Vasanth",
//   greet: () => {
//     console.log(`Hi, I'm ${this.userName}`);
//   },
//   welcome: function () {
//     console.log(`Welcome, ${this.userName}`);
//   },
// };

// const friend = { userName: "Candidate" };

// profile.greet.call(friend);
// profile.welcome.call(friend);

//ANSWER

// Hi, I'm undefined
// Welcome, Candidate

// The context of 'greet' cannot be changed using call because it is defined as an arrow function.
// The call method takes the first parameter as 'this' but in case of arrow functions, they dont have their own this
// ,this is defined when the arrow function is created and cannot be altered later on.They capture this
// from their surrounding lexical scope. When the arrow function is created, at that time this points to the global
// window object. Hence later on when this.username is called it returns undefined. But in case of normal functions,
// this is dynamic, it gets defined at calling time. Hence we get Welcome Candidate in the second case.

// Swiggy | Machine Coding: Recursive Array Flattening
// Question: Implement a polyfill for Array.prototype.flat(). Your implementation must handle
// the depth argument correctly.

const nestedData = [2, [7, [8]]];

// /**
//  * @param {Array} arr
//  * @param {number} depth
//  */
function customFlat(arr, depth = 1) {
  // Your recursive implementation here
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0)
      result.push(...customFlat(arr[i], depth - 1));
    else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(customFlat(nestedData, 1));
// [3, [7, 8]]
// console.log(customFlat(nestedData, 2)); // [7, 8]
// console.log(customFlat(nestedData, Infinity)); // [9, 10, 11, 7, 8, 12]
