var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

// Add element to the queue
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

// Remove element from the front
MyQueue.prototype.pop = function() {

    // If stack2 is empty, move everything from stack1
    if (this.stack2.length === 0) {

        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }

    return this.stack2.pop();
};

// Look at the front element
MyQueue.prototype.peek = function() {

    if (this.stack2.length === 0) {

        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }

    return this.stack2[this.stack2.length - 1];
};

// Check whether queue is empty
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 &&
           this.stack2.length === 0;
};