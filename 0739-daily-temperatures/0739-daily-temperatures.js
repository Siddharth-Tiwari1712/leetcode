function dailyTemperatures(temperatures) {

  // Result starts with 0
  // If no warmer day exists, answer remains 0
  const result = new Array(temperatures.length).fill(0);

  // Store indexes of temperatures
  // that are still waiting for a warmer day
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {

    // Current temperature
    const current = temperatures[i];

    // Check the temperature at the top of the stack
    while (
      stack.length > 0 &&
      current > temperatures[stack[stack.length - 1]]
    ) {

      // Remove the previous day
      const previousIndex = stack.pop();

      // Calculate how many days we waited
      result[previousIndex] = i - previousIndex;
    }

    // Current day is now waiting for
    // a future warmer temperature
    stack.push(i);
  }

  return result;
}