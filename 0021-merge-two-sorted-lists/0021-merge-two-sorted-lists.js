function mergeTwoLists(list1, list2) {

    // Dummy node helps us easily build the result list
    let dummy = new ListNode(0);

    // current will point to the last node
    // in our merged list
    let current = dummy;

    // Continue while BOTH lists have nodes
    while (list1 !== null && list2 !== null) {

        // Compare the current values
        if (list1.val <= list2.val) {

            // Take the node from list1
            current.next = list1;

            // Move list1 to its next node
            list1 = list1.next;

        } else {

            // Take the node from list2
            current.next = list2;

            // Move list2 to its next node
            list2 = list2.next;
        }

        // Move current to the node we just added
        current = current.next;
    }

    // One list may still have nodes
    // Attach the remaining list
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // dummy is just a starting/helper node
    // The actual answer starts at dummy.next
    return dummy.next;
}