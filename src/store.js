const DEFAULT_SUBS = [
  { name: "javascript", text: "J" },
  { name: "reactjs", text: "R" },
  { name: "web_design", text: "W" }
];

const loadSubs = () => {
  try {
    const subs = localStorage.getItem("subs");
    if (subs) {
      return JSON.parse(subs);
    }
    return DEFAULT_SUBS;
  } catch (error) {
    return DEFAULT_SUBS;
  }
};

export const initStore = {
  nav: { items: loadSubs() }
};
