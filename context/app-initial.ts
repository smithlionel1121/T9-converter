import AppContextState from 'interfaces/AppContextState';

const initialState: AppContextState = {
  numericCode: '',
  suggestions: [],
  addNumber: () => undefined,
  replaceNumericCode: () => undefined,
};

export default initialState;
