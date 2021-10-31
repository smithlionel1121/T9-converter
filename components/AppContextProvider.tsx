import AppContext from 'context/app-context';
import axios from 'axios';
import { ReactNode, useReducer } from 'react';
import reducer from 'context/app-reducer';
import initialState from 'context/app-initial';
import { ActionType } from 'context/app-actions';
import ConverterResponse from 'interfaces/ConverterResponse';

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

  const getSuggestions = async () => {
    const res = await axios.post<ConverterResponse>('/api/converter', {
      code: state.numericCode,
    });
    const { suggestions } = res.data;
    dispatch({
      type: ActionType.GET_SUGGESTIONS,
      payload: suggestions,
    });
  };

  return (
    <AppContext.Provider
      value={{ ...state, addNumber, replaceNumericCode, getSuggestions }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
