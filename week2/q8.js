// Atlassian | Machine Coding: The Ultimate Deep Clone
// ### **Question:** Implement `deepClone(obj)`. It must handle circular references.
// Atlassian specifically checks for memory efficiency and handling of nested structures without
//  using `JSON.stringify`.

//ANSWER
// function deepClone(value, map = new WeakMap()) {
//   // 1. Base case: handle primitives

//   if (value === null || typeof value !== "object") return value;
//   // 2. Handle circular references using map
//   if (map.has(value)) return map.get(value);
//   // 3. Recursive cloning for Arrays and Objects
//   const result = Array.isArray(value) ? [] : {};
//   map.set(value, result);

//   for (let key in value) result[key] = deepClone(value[key], map);
//   return result;
// }

// const original = {
//   a: 1,
//   b: { c: 2 },
//   d: [11, 7],
// };
// original.self = original; // Circular reference!

// const copy = deepClone(original);
// console.log(copy !== original); // true
// console.log(copy.b !== original.b); // true
// console.log(copy.self === copy); // true (circularity preserved)
