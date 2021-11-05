import AppContextState from 'interfaces/AppContextState';
import Action, { ActionType } from './app-actions';

let newIndex: number;

export default (state: AppContextState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_NUMBER:
      return { ...state, numericCode: state.numericCode + action.payload };
    case ActionType.DELETE_NUMBER:
      return { ...state, numericCode: state.numericCode.slice(0, -1) };
    case ActionType.REPLACE_NUMERIC_CODE:
      return { ...state, numericCode: action.payload };
    case ActionType.GET_SUGGESTIONS:
      newIndex = 0;
      if (state.suggestionIndex > 0) {
        newIndex = action.payload.indexOf(
          state.suggestions[state.suggestionIndex],
        );
      }
      return {
        ...state,
        suggestions: action.payload,
        suggestionIndex: newIndex >= 0 ? newIndex : 0,
      };
    case ActionType.CLEAR_NUMERIC_CODE:
      return { ...state, numericCode: '' };
    case ActionType.SET_SELECTED_SUGGESTION:
      return { ...state, suggestionIndex: action.payload };

    default:
      return state;
  }
};
