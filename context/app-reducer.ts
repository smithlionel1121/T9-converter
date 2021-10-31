import AppContextState from 'interfaces/AppContextState';
import Action, { ActionType } from './app-actions';

export default (state: AppContextState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_NUMBER:
      return { ...state, numericCode: state.numericCode + action.payload };
    default:
      return state;
  }
};
