// Pattern

// Fast + Slow Pointer

// We keep fast ahead of slow.

// Solution

function removeNthFromEnd(head, n) {


    let dummy = new ListNode(0);
    dummy.next = head;


    let slow = dummy;
    let fast = dummy;


    // Move fast n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }


    // Move both until fast reaches the end
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }


    // Remove the node
    slow.next = slow.next.next;


    return dummy.next;
}

// Why does this work?

// Create dummy node
// let dummy = new ListNode(0);
// dummy.next = head;

// // Now: dummy -> 1 -> 2 -> 3
// console.log(dummy.val);       // 0
// console.log(dummy.next.val);  // 1

// For:

// 1 → 2 → 3 → 4 → 5

// n = 2

// We move fast two positions ahead.

// Then move both together:

// fast
//  ↓
// 3 → 4 → 5
// slow
//  ↓
// 1 → 2 → 3 → 4 → 5

// When fast reaches the end, slow is immediately before the node we need to delete.