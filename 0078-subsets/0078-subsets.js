var subsets = function(nums) {

    // Stores all subsets
    const result = [];

    function backtrack(index, current) {

        // Whatever we currently have is a valid subset
        result.push([...current]);

        // Try every possible next number
        for (let i = index; i < nums.length; i++) {

            // 1. CHOOSE
            current.push(nums[i]);

            // 2. EXPLORE
            // Only consider elements after i
            backtrack(i + 1, current);

            // 3. UNDO
            // Remove the choice so we can try another number
            current.pop();
        }
    }

    // Start with index 0 and empty subset
    backtrack(0, []);

    return result;
}

// 🟢 CALL 1: backtrack(0, [])

// We enter:

// function backtrack(index, current)

// Values:

// index   = 0
// current = []
// Line 1
// result.push([...current]);

// current is:

// []

// So:

// result = [
//     []
// ]
// Now the FOR loop
// for (let i = index; i < nums.length; i++)

// Since:

// index = 0

// this becomes:

// for (let i = 0; i < 3; i++)

// So this loop has:

// i = 0
// i = 1
// i = 2

// But we are currently on the first iteration.

// 🔵 CALL 1 — ITERATION 1
// i = 0

// Look at:

// current.push(nums[i]);

// nums[0] is 1.

// So:

// current = []

// becomes:

// current = [1]
// Next line
// backtrack(i + 1, current);

// i = 0.

// So:

// i + 1 = 1

// Therefore we call:

// backtrack(1, [1]);
// STOP CALL 1.

// CALL 1 is paused here.

// It is waiting for CALL 2 to finish.

// 🟡 CALL 2: backtrack(1, [1])

// We enter the function again.

// This is a new function call.

// Values:

// index   = 1
// current = [1]
// First line
// result.push([...current]);

// Add [1]:

// result = [
//     [],
//     [1]
// ]
// Now its FOR loop
// for (let i = index; i < nums.length; i++)

// Here:

// index = 1

// So this becomes:

// for (let i = 1; i < 3; i++)

// Therefore this loop will do:

// i = 1
// i = 2

// We are currently at:

// i = 1
// 🔵 CALL 2 — ITERATION 1
// i = 1

// Execute:

// current.push(nums[i]);

// nums[1] = 2.

// So:

// current = [1]

// becomes:

// current = [1,2]
// Next line
// backtrack(i + 1, current);

// i = 1.

// Therefore:

// i + 1 = 2

// So we call:

// backtrack(2, [1,2]);
// STOP CALL 2.

// CALL 2 is now paused.

// 🟠 CALL 3: backtrack(2, [1,2])

// Values:

// index   = 2
// current = [1,2]
// Add current
// result.push([...current]);

// Result:

// result = [
//     [],
//     [1],
//     [1,2]
// ]
// FOR loop
// for (let i = index; i < nums.length; i++)

// index = 2.

// Therefore:

// for (let i = 2; i < 3; i++)

// There is only:

// i = 2
// 🔵 CALL 3 — ITERATION 1
// i = 2

// Execute:

// current.push(nums[i]);

// nums[2] = 3.

// So:

// current = [1,2]

// becomes:

// current = [1,2,3]
// Next
// backtrack(i + 1, current);

// i = 2.

// So:

// i + 1 = 3

// Call:

// backtrack(3, [1,2,3]);
// 🟣 CALL 4: backtrack(3, [1,2,3])

// Values:

// index = 3
// current = [1,2,3]

// First:

// result.push([...current]);

// Result:

// [
//     [],
//     [1],
//     [1,2],
//     [1,2,3]
// ]

// Now:

// for (let i = 3; i < 3; i++)

// Is:

// 3 < 3

// false.

// So the loop doesn't execute.

// CALL 4 finishes.

// We return to CALL 3.

// 🔴 BACK TO CALL 3

// Remember CALL 3?

// It was:

// backtrack(2, [1,2])

// And it was doing:

// current.push(3);

// backtrack(3, [1,2,3]);

// // WE ARE HERE NOW
// current.pop();

// So now:

// current.pop();

// removes 3.

// Therefore:

// [1,2,3]
//     ↓ pop
// [1,2]

// Now CALL 3's loop asks:

// Is there another i?

// It had:

// i = 2

// Then:

// i++

// gives:

// i = 3

// Check:

// 3 < 3

// False.

// CALL 3 finishes.

// 🔴 BACK TO CALL 2

// This is extremely important.

// We return to:

// backtrack(1, [1])

// CALL 2.

// What was CALL 2 doing?

// current.push(2);

// backtrack(2, [1,2]);

// // WE ARE HERE
// current.pop();

// So:

// current.pop();

// removes 2.

// Therefore:

// [1,2]
//   ↓ pop
// [1]

// Now CALL 2's for loop continues.

// Remember:

// for (let i = 1; i < 3; i++)

// We were at:

// i = 1

// So JavaScript does:

// i++

// Now:

// i = 2

// 🎯 THIS IS WHERE 3 IS CHOSEN.

// 🔵 CALL 2 — ITERATION 2

// Now:

// i = 2

// Therefore:

// nums[i]

// means:

// nums[2]

// which is:

// 3

// Execute:

// current.push(nums[i]);

// We currently have:

// current = [1]

// Push 3:

// current = [1,3]
// Then:
// backtrack(i + 1, current);

// i = 2.

// So:

// i + 1 = 3

// Call:

// backtrack(3, [1,3]);
// 🟣 CALL 5: backtrack(3, [1,3])

// Add current:

// result =
// [
//     [],
//     [1],
//     [1,2],
//     [1,2,3],
//     [1,3]
// ]

// Loop:

// for (let i = 3; i < 3; i++)

// Nothing happens.

// Return to CALL 2.

// 🔴 BACK TO CALL 2 AGAIN

// We had:

// current = [1,3]

// Now:

// current.pop();

// So:

// [1,3]
//  ↓
// [1]

// CALL 2's loop:

// i = 2

// then:

// i++

// gives:

// i = 3

// Condition:

// 3 < 3

// false.

// So CALL 2 finishes.

// 🔴 BACK TO CALL 1

// Now we return to:

// backtrack(0, [])

// This is the original call.

// CALL 1 was waiting here:

// current.push(1);

// backtrack(1, [1]);

// // NOW WE ARE HERE

// current.pop();

// So:

// current.pop();

// removes 1.

// Therefore:

// [1]
//  ↓
// []

// Now CALL 1's loop continues.

// Remember:

// for (let i = 0; i < 3; i++)

// We were at:

// i = 0

// So:

// i++

// gives:

// i = 1

// 🎯 THIS IS HOW 2 IS CHOSEN.

// 🔵 CALL 1 — ITERATION 2

// Now:

// i = 1

// Therefore:

// nums[i]

// is:

// nums[1]

// which is:

// 2

// Current is:

// []

// Push 2:

// [2]

// Then:

// backtrack(i + 1, current);

// becomes:

// backtrack(2, [2]);
// 🟠 CALL 6: backtrack(2, [2])

// Add:

// [2]

// Result:

// [
//     [],
//     [1],
//     [1,2],
//     [1,2,3],
//     [1,3],
//     [2]
// ]

// Its loop:

// for (let i = 2; i < 3; i++)

// So:

// i = 2

// Choose:

// nums[2] = 3

// Current:

// [2]

// becomes:

// [2,3]

// Then:

// backtrack(3, [2,3])

// adds:

// [2,3]

// Result:

// [
//     [],
//     [1],
//     [1,2],
//     [1,2,3],
//     [1,3],
//     [2],
//     [2,3]
// ]

// Then recursion finishes.

// pop() happens:

// [2,3]
//  ↓
// [2]

// CALL 6 finishes.

// 🔴 BACK TO CALL 1

// We return to:

// backtrack(0, [])

// CALL 1.

// It was processing:

// i = 1

// We had:

// current = [2]

// Now:

// current.pop();

// gives:

// [2] → []

// Then the loop does:

// i++

// So:

// i = 1 → i = 2
// 🔵 CALL 1 — ITERATION 3

// Now:

// i = 2

// Therefore:

// nums[2] = 3

// Current:

// []

// Push:

// [3]

// Then:

// backtrack(3, [3])
// 🟣 CALL 7: backtrack(3, [3])

// Add:

// [3]

// Result becomes:

// [
//     [],
//     [1],
//     [1,2],
//     [1,2,3],
//     [1,3],
//     [2],
//     [2,3],
//     [3]
// ]

// Loop:

// for (let i = 3; i < 3; i++)

// Nothing happens.

// Return.

// 🔴 BACK TO CALL 1 ONE LAST TIME

// Current was:

// [3]

// So:

// current.pop();

// gives:

// []

// Loop:

// i = 2

// then:

// i++

// gives:

// i = 3

// Condition:

// 3 < 3

// false.

// CALL 1 finishes.

// Return result.

// 🎯 Now look at ONLY the original call

// This is probably the most important thing.

// We called:

// backtrack(0, []);

// ONE TIME.

// Inside that SAME call, its loop does:

// i = 0
//     ↓
//     choose 1
//     ↓
//     explore EVERYTHING with 1
//     ↓
//     come back
//     ↓
// i = 1
//     ↓
//     choose 2
//     ↓
//     explore EVERYTHING with 2
//     ↓
//     come back
//     ↓
// i = 2
//     ↓
//     choose 3
//     ↓
//     explore EVERYTHING with 3

// So:

// backtrack(0, [])

//     i=0
//       ↓
//      [1]
//       ↓
//   explore all
//       ↓
//      []

//     i=1
//       ↓
//      [2]
//       ↓
//   explore all
//       ↓
//      []

//     i=2
//       ↓
//      [3]
//       ↓
//   explore all
//       ↓
//      []
// And inside [1]

// When we call:

// backtrack(1, [1])

// THAT function has its own loop:

// i=1 → choose 2
//         ↓
//       [1,2]
//         ↓
//       explore
//         ↓
//       back to [1]

// i=2 → choose 3
//         ↓
//       [1,3]

// So:

//                   []
//                   |
//            ┌──────┼──────┐
//            ↓      ↓      ↓
//           [1]    [2]    [3]
//            |      |
//          ┌─┴─┐    |
//          ↓   ↓    ↓
//       [1,2] [1,3] [2,3]
//          |
//          ↓
//       [1,2,3]
// 🔥 The biggest thing to understand

// There are different i variables because every call to backtrack() creates a new function execution.

// For example:

// CALL 1:
// backtrack(0, [])

//     i = 0, 1, 2

// Then:

// CALL 2:
// backtrack(1, [1])

//     i = 1, 2

// Then:

// CALL 3:
// backtrack(2, [1,2])

//     i = 2

// Then we return.

// The original i from CALL 1 is still there.

// It was:

// i = 0

// After CALL 2 finishes, it continues:

// i++

// and becomes:

// i = 1

// That's why [2] happens.

// Remember this exact sequence

// For the original call:

// backtrack(0, [])

// i = 0 → choose 1
//           ↓
//        backtrack(1,[1])
//           ↓
//        finish
//           ↓
//        pop 1
//           ↓
// i = 1 → choose 2       ← HERE!
//           ↓
//        backtrack(2,[2])
//           ↓
//        finish
//           ↓
//        pop 2
//           ↓
// i = 2 → choose 3