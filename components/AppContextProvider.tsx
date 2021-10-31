import AppContext from 'context/app-context';
import { ReactNode, useReducer } from 'react';
import reducer from 'context/app-reducer';
import initialState from 'context/app-initial';

interface Props {
  children: ReactNode;
}

const AppContextProvider = ({ children }: Props) => {
  const [state] = useReducer(reducer, initialState);

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
