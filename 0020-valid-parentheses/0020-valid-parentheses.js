function isValid(s) {
  const stack = [];

  for (let char of s) {

    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {

      if (stack.length === 0) {
        return false;
      }

      const top = stack.pop();

      if (
        (char === ')' && top !== '(') ||
        (char === ']' && top !== '[') ||
        (char === '}' && top !== '{')
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}


// function isValid(s) {
//   const stack = [];

//   const pairs = {
//     ')': '(',
//     ']': '[',
//     '}': '{'
//   };

//   for (let char of s) {

//     if (char === '(' || char === '[' || char === '{') {
//       stack.push(char);
//     } else {

//       const top = stack.pop();

//       if (top !== pairs[char]) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// }