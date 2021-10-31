export enum ActionType {
  ADD_NUMBER = 'ADD_NUMBER',
  REPLACE_NUMERIC_CODE = 'REPLACE_NUMERIC_CODE',
}

type Action =
  | { type: ActionType.ADD_NUMBER; payload: string }
  | { type: ActionType.REPLACE_NUMERIC_CODE; payload: string };

export default Action;
