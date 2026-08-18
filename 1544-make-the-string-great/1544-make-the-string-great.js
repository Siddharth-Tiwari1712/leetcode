function makeGood(s) {
  const stack = [];

  for (let char of s) {

    const top = stack[stack.length - 1];

    if (
      top &&
      top !== char &&
      top.toLowerCase() === char.toLowerCase()
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
}