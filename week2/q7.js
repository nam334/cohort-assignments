// Zeta | Technical Round: Deep Equality Utility
// Question: Implement isDeepEqual(obj1, obj2). This is essential in frontend development for optimizing re-renders in components where you only want to update if the data actually changed.

//ANSWER
function isDeepEqual(obj1, obj2) {
  // 1. Check if same reference
  if (obj1 === obj2) return true;
  // 2. Check types
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  )
    return false;
  // 3. Recursive key-by-key comparison

  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  if (key1.length !== key2.length) return false;
  for (let key of key1) {
    if (!key2.includes(key)) return false;

    if (!isDeepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

// // --- Test Cases ---
// const profileA = { name: "Vasanth", roles: ["admin", "mentor"], meta: { id: 1 } };
// const profileB = { name: "Vasanth", roles: ["admin", "mentor"], meta: { id: 1 } };
// const profileC = { name: "Vasanth", roles: ["admin"], meta: { id: 1 } };

// console.log("Test 1 (Identical):", isDeepEqual(profileA, profileB)); // Expected: true
// console.log("Test 2 (Different Roles):", isDeepEqual(profileA, profileC)); // Expected: false
// console.log("Test 3 (Nested Change):", isDeepEqual(profileA, {...profileB, meta: { id: 2 } })); // Expected: false
// console.log("Test 4 (Primitive):", isDeepEqual(10, 10)); // Expected: true
