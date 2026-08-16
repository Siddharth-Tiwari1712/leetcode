function romanToInt(s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && values[s[i]] < values[s[i + 1]]) {
      total -= values[s[i]];
    } else {
      total += values[s[i]];
    }
  }

  return total;
}

// Example
// MCMXCIV

// Process:

// M = 1000 → add
// C = 100  → next is M → subtract
// M = 1000 → add
// X = 10   → next is C → subtract
// C = 100  → add
// I = 1    → next is V → subtract
// V = 5    → add