var stringRotation = (A, B) => {
  let str = A;
  while (A !== B) {
    let temp = A.split(""); // "[...]"
    let first = temp.shift(); // get first elem
    temp.push(first); // push first
    A = temp.join("");
    if (A === str) {
      return false;
    }
  }
  return true;
};

console.log(stringRotation("waterbottle", "erbottlewat"));
// console.log(stringRotation("waterbottle", "erbottlewtr"));
