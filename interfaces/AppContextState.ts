import { Dispatch } from 'react';

import Action from 'context/app-actions';

export default interface AppContextState {
  numericCode: string;
  suggestions: string[];
  dispatch: Dispatch<Action>;
  addNumber: (number: number) => void;
  replaceNumericCode: (numericCode: string) => void;
}
