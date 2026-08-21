// Given:

//        3
//       / \
//      9   20
//         /  \
//        15   7

// Return values level by level:

// [
//     [3],
//     [9,20],
//     [15,7]
// ]
// Pattern

// Queue + BFS

// Think:

// Level 1 → 3


// Level 2 → 9,20


// Level 3 → 15,7
// Solution
function levelOrder(root) {


    if (root === null) {
        return [];
    }


    let result = [];


    // Queue starts with root
    let queue = [root];


    while (queue.length > 0) {


        let level = [];


        // Number of nodes in current level
        let size = queue.length;


        for (let i = 0; i < size; i++) {


            // Remove first node
            let node = queue.shift();


            level.push(node.val);


            // Add children for next level
            if (node.left) {
                queue.push(node.left);
            }


            if (node.right) {
                queue.push(node.right);
            }
        }


        result.push(level);
    }


    return result;
}