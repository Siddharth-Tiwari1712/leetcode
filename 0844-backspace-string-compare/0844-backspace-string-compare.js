function backspaceCompare(s, t) {

  function build(str) {
    const stack = [];

    for (let char of str) {

      if (char === '#') {
        stack.pop();
      } else {
        stack.push(char);
      }
    }

    return stack.join('');
  }

  return build(s) === build(t);
}