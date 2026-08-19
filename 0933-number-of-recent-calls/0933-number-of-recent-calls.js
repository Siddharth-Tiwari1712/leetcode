var RecentCounter = function() {

    // Store all request times
    this.queue = [];
};

RecentCounter.prototype.ping = function(t) {

    // Add the new request
    this.queue.push(t);

    // Remove requests older than 3000 ms
    while (this.queue[0] < t - 3000) {
        this.queue.shift();
    }

    // Number of requests remaining
    return this.queue.length;
};