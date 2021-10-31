import AppContext from 'context/app-context';
import { ReactNode, useReducer } from 'react';
import reducer from 'context/app-reducer';
import initialState from 'context/app-initial';
import { ActionType } from 'context/app-actions';

interface Props {
  children: ReactNode;
}

const AppContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addNumber = (number: string) => {
    dispatch({ type: ActionType.ADD_NUMBER, payload: number });
  };
  const replaceNumericCode = (numericCode: string) => {
    if (numericCode.match(/^(\s*|[2-9]+)$/))
      dispatch({ type: ActionType.REPLACE_NUMERIC_CODE, payload: numericCode });
  };

  return (
    <AppContext.Provider value={{ ...state, addNumber, replaceNumericCode }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
