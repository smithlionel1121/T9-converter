import AppContextState from 'interfaces/AppContextState';
import Action, { ActionType } from './app-actions';

export default (state: AppContextState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_NUMBER:
      return { ...state, numericCode: state.numericCode + action.payload };
    case ActionType.DELETE_NUMBER:
      return { ...state, numericCode: state.numericCode.slice(0, -1) };
    case ActionType.REPLACE_NUMERIC_CODE:
      return { ...state, numericCode: action.payload };
    case ActionType.GET_SUGGESTIONS:
      return { ...state, suggestions: action.payload };
    case ActionType.CLEAR_NUMERIC_CODE:
      return { ...state, numericCode: '' };
    default:
      return state;
  }
};
