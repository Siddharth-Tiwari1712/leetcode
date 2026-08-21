// Grid contains:

// 0 = empty
// 1 = fresh orange
// 2 = rotten orange

// Every minute, a rotten orange makes adjacent fresh oranges rotten.

// Example:

// 2 1 1
// 1 1 0
// 0 1 1

// After 1 minute:

// 2 2 1
// 2 1 0
// 0 1 1

// Then:

// 2 2 2
// 2 2 0
// 0 1 1

// Eventually all oranges become rotten.

// Return the number of minutes.

// Pattern

// Multi-source BFS

// This is very important.

// Why BFS?

// Because everything happens level by level / minute by minute.

// Minute 0
//     ↓
// initial rotten oranges


// Minute 1
//     ↓
// new rotten oranges


// Minute 2
//     ↓
// new rotten oranges
// Solution
function orangesRotting(grid) {


    let queue = [];
    let fresh = 0;


    // Find all rotten and fresh oranges
    for (let row = 0; row < grid.length; row++) {


        for (let col = 0; col < grid[0].length; col++) {


            if (grid[row][col] === 2) {
                queue.push([row, col]);
            }


            if (grid[row][col] === 1) {
                fresh++;
            }
        }
    }


    let minutes = 0;


    // BFS
    while (queue.length > 0 && fresh > 0) {


        let size = queue.length;


        // Process one minute
        for (let i = 0; i < size; i++) {


            let [row, col] = queue.shift();


            // Four directions
            let directions = [
                [-1, 0], // up
                [1, 0],  // down
                [0, -1], // left
                [0, 1]   // right
            ];


            for (let [dr, dc] of directions) {


                let newRow = row + dr;
                let newCol = col + dc;


                // Check boundaries
                if (
                    newRow >= 0 &&
                    newRow < grid.length &&
                    newCol >= 0 &&
                    newCol < grid[0].length &&
                    grid[newRow][newCol] === 1
                ) {


                    // Make fresh orange rotten
                    grid[newRow][newCol] = 2;


                    fresh--;


                    // Add to queue
                    queue.push([newRow, newCol]);
                }
            }
        }


        minutes++;
    }


    // If fresh oranges remain
    if (fresh > 0) {
        return -1;
    }


    return minutes;
}
// The important concept

// Initially:

// 2 1 1
// 1 1 0
// 0 1 1
// ↑
// rotten

// Put all rotten oranges into the queue.

// Then:

// queue
//  ↓
// process all current rotten
//  ↓
// make neighboring fresh oranges rotten
//  ↓
// put new rotten oranges into queue
//  ↓
// next minute
// Memorize

// Grid + shortest time/steps + spreading → BFS.