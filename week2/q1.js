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
