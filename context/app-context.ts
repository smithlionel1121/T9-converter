import AppContextState from 'interfaces/AppContextState';
import { createContext } from 'react';
import initialState from './app-initial';

const AppContext = createContext<AppContextState>(initialState);

export default AppContext;
