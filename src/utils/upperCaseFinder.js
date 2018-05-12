const upperCaseFinder = str => {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      return char;
    }
  }
  return null;
};

export default upperCaseFinder;
