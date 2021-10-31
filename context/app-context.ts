import AppContextState from 'interfaces/AppContextState';
import { createContext } from 'react';

const AppContext = createContext<AppContextState | undefined>(undefined);

export default AppContext;
