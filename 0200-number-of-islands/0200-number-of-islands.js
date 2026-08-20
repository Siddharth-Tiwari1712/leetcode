function numIslands(grid) {

    let count = 0;

    // Go through every row
    for (let row = 0; row < grid.length; row++) {

        // Go through every column
        for (let col = 0; col < grid[0].length; col++) {

            // We found land
            if (grid[row][col] === "1") {

                // This is a new island
                count++;

                // Explore the complete island
                dfs(row, col);
            }
        }
    }

    return count;


    // DFS explores all connected land
    function dfs(row, col) {

        // 1. Outside the grid?
        if (
            row < 0 ||
            row >= grid.length ||
            col < 0 ||
            col >= grid[0].length
        ) {
            return;
        }

        // 2. Water or already visited?
        if (grid[row][col] === "0") {
            return;
        }

        // 3. Mark this land as visited
        grid[row][col] = "0";

        // 4. Go UP
        dfs(row - 1, col);

        // 5. Go DOWN
        dfs(row + 1, col);

        // 6. Go LEFT
        dfs(row, col - 1);

        // 7. Go RIGHT
        dfs(row, col + 1);
    }
}