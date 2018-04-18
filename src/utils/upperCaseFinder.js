const upperCaseFinder = str => {
  for (let char of str) {
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      return char;
    }
  }
  return null;
};

export default upperCaseFinder;
