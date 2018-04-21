const upperCaseFinder = str => {
  for (const char of str) {
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      return char;
    }
  }
  return null;
};

export default upperCaseFinder;
