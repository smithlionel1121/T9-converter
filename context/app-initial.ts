import AppContextState from 'interfaces/AppContextState';

const initialState: AppContextState = {
  numericCode: '',
  suggestions: [],
  suggestionIndex: 0,
  dispatch: () => undefined,
  addNumber: () => undefined,
  replaceNumericCode: () => undefined,
};

export default initialState;
