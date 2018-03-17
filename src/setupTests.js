//tests are failing because of selective semantic-ui component imports
//direct imports fix this but make bundle size much bigger

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;
