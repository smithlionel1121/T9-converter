import AppContext from 'context/app-context';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AppContextProvider = ({ children }: Props) => {
  return (
    <AppContext.Provider value={undefined}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
