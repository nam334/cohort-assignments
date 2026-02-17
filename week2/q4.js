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
