var MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function (val) {
    this.stack.push(val);

    // If minStack is empty OR current value is smaller
    // than the current minimum, update minStack.
    if (
        this.minStack.length === 0 ||
        val <= this.minStack[this.minStack.length - 1]
    ) {
        this.minStack.push(val);
    }
};

MinStack.prototype.pop = function () {
    const removed = this.stack.pop();

    // If removed value was the minimum,
    // remove it from minStack too.
    if (removed === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1];
};

// push(5)
// push(3)
// push(7)
// push(2)

// Stack:
// [5, 3, 7, 2]

// getMin() → 2

// pop()

// Stack:
// [5, 3, 7]

// getMin() → 3