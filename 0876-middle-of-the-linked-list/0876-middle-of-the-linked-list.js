function middleNode(head) {

    // Both pointers start at the head
    let slow = head;
    let fast = head;

    // fast moves two nodes at a time
    // slow moves one node at a time
    while (
        fast !== null &&
        fast.next !== null
    ) {

        // Move slow by 1
        slow = slow.next;

        // Move fast by 2
        fast = fast.next.next;
    }

    // When fast reaches the end,
    // slow is at the middle
    return slow;
}