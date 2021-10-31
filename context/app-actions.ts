export enum ActionType {
  ADD_NUMBER = 'ADD_NUMBER',
}

type Action = { type: ActionType.ADD_NUMBER; payload: string };

export default Action;
