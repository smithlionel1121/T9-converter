import DisplayContextState from 'interfaces/DisplayContextState';
import { createContext } from 'react';
import initialState from './display-initial';

const DisplayContext = createContext<DisplayContextState>(initialState);

export default DisplayContext;
