// a → [a]

// b → [a,b]

// b → [a]

// a → []

// c → [c]

// a → [c,a]

function removeDuplicates(s) {
  const stack = [];

  for (let char of s) {

    if (stack.length > 0 &&
        stack[stack.length - 1] === char) {

      stack.pop();

    } else {

      stack.push(char);
    }
  }

  return stack.join('');
}