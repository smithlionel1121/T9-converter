import AppContextState from 'interfaces/AppContextState';

const initialState: AppContextState = {
  numericCode: '',
  suggestions: [],
  addNumber: () => undefined,
  replaceNumericCode: () => undefined,
  getSuggestions: () => undefined,
};

export default initialState;
