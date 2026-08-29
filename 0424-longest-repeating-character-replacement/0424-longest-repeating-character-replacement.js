/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

    const count = new Map();

    let left = 0;
    let maxFreq = 0;
    let result = 0;

    for (let right = 0; right < s.length; right++) {

        const char = s[right];

        count.set(
            char,
            (count.get(char) || 0) + 1
        );

        maxFreq = Math.max(
            maxFreq,
            count.get(char)
        );

        // Characters that need replacement
        const windowSize = right - left + 1;
        const replacements = windowSize - maxFreq;

        // Too many replacements
        if (replacements > k) {
            count.set(
                s[left],
                count.get(s[left]) - 1
            );

            left++;
        }

        result = Math.max(
            result,
            right - left + 1
        );
    }

    return result;
};
// Consider:

// s = "AABABBA"
// k = 1

// We'll track:

// right
// window
// maxFreq
// replacements
// result
// right = 0
// A

// Frequency:

// A = 1
// windowSize = 1
// maxFreq = 1
// replacements = 1 - 1 = 0

// Valid.

// result = 1
// right = 1

// Window:

// AA

// Frequency:

// A = 2
// windowSize = 2
// maxFreq = 2
// replacements = 2 - 2 = 0

// Valid.

// result = 2
// right = 2

// Window:

// AAB

// Frequency:

// A = 2
// B = 1
// windowSize = 3
// maxFreq = 2
// replacements = 3 - 2 = 1

// Valid because:

// 1 <= k

// Result:

// result = 3
// right = 3

// Window:

// AABA

// Frequency:

// A = 3
// B = 1
// windowSize = 4
// maxFreq = 3
// replacements = 4 - 3 = 1

// Valid.

// result = 4

// We can turn:

// A A B A

// into:

// A A A A

// with one replacement.

// right = 4

// Window:

// AABAB

// Frequency:

// A = 3
// B = 2
// windowSize = 5
// maxFreq = 3
// replacements = 5 - 3
//              = 2

// But:

// k = 1

// So:

// 2 > 1

// Invalid.

// Remove s[left].

// left is currently 0, so remove:

// A

// Window becomes:

// ABAB

// Result remains:

// 4
// right = 5

// Add:

// B

// Current window:

// ABABB

// Counts:

// A = 2
// B = 3

// Conceptually:

// windowSize = 5
// maxFreq = 3
// replacements = 2

// Invalid.

// Remove left A:

// BABB

// Now the maintained window size is 4.

// Result:

// 4
// right = 6

// Add:

// A

// Window:

// BABBA

// Again, it becomes too large for k = 1, so we shrink from the left.

// Eventually the maintained valid window has length:

// 4

// Therefore:

// return 4