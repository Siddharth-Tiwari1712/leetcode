function lengthOfLongestSubstring(s) {

    let set = new Set();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {

        // Duplicate found
        while (set.has(s[right])) {

            // Remove left character
            set.delete(s[left]);

            left++;
        }

        // Add current character
        set.add(s[right]);

        // Calculate current window length
        maxLength = Math.max(
            maxLength,
            right - left + 1
        );
    }

    return maxLength;
}