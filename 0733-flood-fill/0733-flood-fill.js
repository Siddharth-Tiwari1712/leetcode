function floodFill(image, sr, sc, color) {

    // Remember the original color
    const originalColor = image[sr][sc];

    // If the new color is already the same,
    // there is nothing to do
    if (originalColor === color) {
        return image;
    }

    // DFS function
    function dfs(row, col) {

        // --------------------------------
        // 1. Check if row is outside image
        // --------------------------------
        if (
            row < 0 ||
            row >= image.length ||
            col < 0 ||
            col >= image[0].length
        ) {
            return;
        }

        // --------------------------------
        // 2. Check if this is NOT the
        //    original color
        // --------------------------------
        if (image[row][col] !== originalColor) {
            return;
        }

        // --------------------------------
        // 3. Change the current cell
        // --------------------------------
        image[row][col] = color;

        // --------------------------------
        // 4. Visit UP
        // --------------------------------
        dfs(row - 1, col);

        // --------------------------------
        // 5. Visit DOWN
        // --------------------------------
        dfs(row + 1, col);

        // --------------------------------
        // 6. Visit LEFT
        // --------------------------------
        dfs(row, col - 1);

        // --------------------------------
        // 7. Visit RIGHT
        // --------------------------------
        dfs(row, col + 1);
    }

    // Start DFS from starting position
    dfs(sr, sc);

    return image;
}