var evalRPN = function(tokens) {

    const stack = [];

    for (const token of tokens) {

        // Number → put it into stack
        if (!isNaN(token)) {
            stack.push(Number(token));
        }

        else {
            // IMPORTANT:
            // First pop = right operand
            // Second pop = left operand
            const right = stack.pop();
            const left = stack.pop();

            let result;

            if (token === "+") {
                result = left + right;
            }
            else if (token === "-") {
                result = left - right;
            }
            else if (token === "*") {
                result = left * right;
            }
            else {
                result = Math.trunc(left / right);
            }

            stack.push(result);
        }
    }

    return stack[0];
};


// Normal mathematical notation:

// 2 + 3

// RPN writes it as:

// 2 3 +

// For:

// (2 + 3) * 4

// RPN is:

// 2 3 + 4 *

// The operator comes after the numbers.

// So the rule is:

// When you see a number → put it in the stack.
// When you see an operator → take the last two numbers from the stack, calculate, and put the result back.

// 2. Let's walk through your code

// Suppose:

// tokens = ["2", "1", "+", "3", "*"]

// This represents:

// (2 + 1) * 3

// Initially:

// stack = []
// Token = "2"

// It's a number:

// stack.push(Number(token));

// So:

// stack = [2]
// Token = "1"

// Again, number:

// stack = [2, 1]
// Token = "+"

// Now we encounter an operator.

// Your code does:

// const right = stack.pop();
// const left = stack.pop();

// First:

// right = stack.pop();

// removes 1:

// stack = [2]

// right = 1

// Then:

// left = stack.pop();

// removes 2:

// stack = []

// left = 2

// Now:

// left + right

// is:

// 2 + 1 = 3