// What is the question?

// Given:

//       4
//      / \
//     2   7
//    / \ / \
//   1  3 6  9

// Invert it:

//       4
//      / \
//     7   2
//    / \ / \
//   9  6 3  1

// Basically:

// left ↔ right

// for every node.

// Pattern

// Recursion

// Solution
function invertTree(root) {


    // If tree is empty
    if (root === null) {
        return null;
    }


    // Swap left and right
    let temp = root.left;
    root.left = root.right;
    root.right = temp;


    // Invert left subtree
    invertTree(root.left);


    // Invert right subtree
    invertTree(root.right);


    return root;
}
// Think recursively