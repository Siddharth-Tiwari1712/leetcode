function groupAnagrams(strs) {
  const groups = {};

  for (let word of strs) {
    const sortedWord = word.split('').sort().join('');

    if (!groups[sortedWord]) {
      groups[sortedWord] = [];
    }

    groups[sortedWord].push(word);
  }

  return Object.values(groups);
}