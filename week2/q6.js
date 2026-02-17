// Flipkart | Machine Coding Round: Robust Debounce Utility
// Question: Implement a debounce utility.
// The interviewer will likely ask for the "Immediate/Leading" flag as a follow-up

//ANSWER

function debounce(func, wait, immediate = true) {
  let timeout;
  // TODO: Logic to clear timeout and handle 'this' context
  return function (...args) {
    let context = this;
    const clbck = immediate && !timeout;
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) func.apply(context, ...args);
    }, wait);

    if (clbck) func.apply(context, ...args);
  };
}

// // Usage in UI:
// const onSearch = debounce((e) => console.log("Searching for:", e.target.value), 300);
// // document.getElementById('search').addEventListener('input', onSearch);
