/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {

    let diameter = 0;

    function height(node) {

        if (node === null) {
            return 0;
        }

        const left = height(node.left);
        const right = height(node.right);

        // Longest path passing through this node
        diameter = Math.max(
            diameter,
            left + right
        );

        // Return height to parent
        return 1 + Math.max(left, right);
    }

    height(root);

    return diameter;
};



// Job 1 — Return height

// It tells the parent:

// "How tall is the subtree below me?"

// For example:

//     2
//    / \
//   4   5

// For node 2:

// height(4) = 1
// height(5) = 1

// So:

// return 1 + Math.max(1, 1);

// returns:

// 2

// So node 2 has height 2.

// 2. But we also need diameter

// While calculating height, we can also calculate:

// left height + right height

// For node 2:

// left = 1
// right = 1

// left + right = 2

// That means:

// 4 → 2 → 5

// has 2 edges.

// So we update:

// diameter = Math.max(diameter, left + right);

// Notice something important:

// We don't return the diameter.

// We return the height:

// return 1 + Math.max(left, right);

// But we update the global diameter variable separately.

// 3. Why can't we return diameter?

// Because the parent needs height, not diameter.

// Look at:

//        1
//       / \
//      2   3
//     / \
//    4   5

// When we are processing node 2, its parent is node 1.

// Node 1 needs to know:

// How tall is my left subtree?

// It needs:

// height(2)

// It does not need:

// diameter(2)

// So node 2 must return its height.

//         1
//        /
//       2
//      / \
//     4   5

// Node 2 tells node 1:

// "My height is 2"

// Then node 1 can calculate its own diameter.