function hasCycle(head) {

    // Slow moves one node at a time
    let slow = head;

    // Fast moves two nodes at a time
    let fast = head;


    // Continue while fast can keep moving
    while (
        fast !== null &&
        fast.next !== null
    ) {

        // Move slow by 1
        slow = slow.next;

        // Move fast by 2
        fast = fast.next.next;


        // If they meet, there is a cycle
        if (slow === fast) {
            return true;
        }
    }


    // Fast reached null
    // Therefore there is no cycle
    return false;
}