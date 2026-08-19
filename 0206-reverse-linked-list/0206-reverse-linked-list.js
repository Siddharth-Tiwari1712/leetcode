function reverseList(head) {

    // Previous node starts as null
    // because the new last node should point to null
    let prev = null;

    // Start from the first node
    let current = head;

    // Keep going until we reach the end
    while (current !== null) {

        // Save the next node BEFORE changing current.next
        // Otherwise we would lose the rest of the list
        let next = current.next;

        // Reverse the direction of the link
        current.next = prev;

        // Move prev one step forward
        prev = current;

        // Move current one step forward
        current = next;
    }

    // prev is now the new head
    return prev;
}