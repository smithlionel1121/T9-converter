export enum ActionType {
  ADD_NUMBER = 'ADD_NUMBER',
  DELETE_NUMBER = 'DELETE_NUMBER',
  REPLACE_NUMERIC_CODE = 'REPLACE_NUMERIC_CODE',
  GET_SUGGESTIONS = 'GET_SUGGESTIONS',
  CLEAR_NUMERIC_CODE = 'CLEAR_NUMERIC_CODE',
  SET_SELECTED_SUGGESTION = 'SET_SELECTED_SUGGESTION',
}

type Action =
  | { type: ActionType.ADD_NUMBER; payload: string }
  | { type: ActionType.DELETE_NUMBER; payload?: undefined }
  | { type: ActionType.REPLACE_NUMERIC_CODE; payload: string }
  | { type: ActionType.CLEAR_NUMERIC_CODE; payload?: undefined }
  | { type: ActionType.GET_SUGGESTIONS; payload: string[] }
  | { type: ActionType.SET_SELECTED_SUGGESTION; payload: number };

export default Action;
