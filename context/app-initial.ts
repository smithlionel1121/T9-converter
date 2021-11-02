import AppContextState from 'interfaces/AppContextState';

const initialState: AppContextState = {
  numericCode: '',
  suggestions: [],
  dispatch: () => undefined,
  addNumber: () => undefined,
  replaceNumericCode: () => undefined,
};

export default initialState;
