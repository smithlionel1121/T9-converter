import AppContext from 'context/app-context';
import axios from 'axios';
import { ReactNode, useEffect, useReducer } from 'react';
import reducer from 'context/app-reducer';
import initialState from 'context/app-initial';
import { ActionType } from 'context/app-actions';
import ConverterResponse from 'interfaces/ConverterResponse';
import AppContextState from 'interfaces/AppContextState';

interface Props {
  children: ReactNode;
}

const AppContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getSuggestions = async (
      numericCode: AppContextState['numericCode'],
    ) => {
      const res = await axios.post<ConverterResponse>('/api/converter', {
        numericCode,
      });
      const { suggestions } = res.data;
      dispatch({
        type: ActionType.GET_SUGGESTIONS,
        payload: suggestions,
      });
    };

    getSuggestions(state.numericCode);
  }, [state.numericCode]);

  const addNumber = (number: number) => {
    if (number > 1)
      dispatch({ type: ActionType.ADD_NUMBER, payload: number.toString() });
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
