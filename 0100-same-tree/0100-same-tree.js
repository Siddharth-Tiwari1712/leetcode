// Given two trees:

// Tree 1       Tree 2


//    1            1
//   / \          / \
//  2   3        2   3

// Are they exactly the same?

// Answer:

// true

// But:

//    1            1
//   /              \
//  2                2

// Answer:

// false

function isSameTree(p, q) {

    // Both are empty
    if (p === null && q === null) {
        return true;
    }

    // One is empty, other isn't
    if (p === null || q === null) {
        return false;
    }

    // Values are different
    if (p.val !== q.val) {
        return false;
    }

    // Check left and right
    return (
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right)
    );
}