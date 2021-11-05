import AppContext from 'context/app-context';
import axios from 'axios';
import { ReactNode, useEffect, useMemo, useReducer } from 'react';
import reducer from 'context/app-reducer';
import initialState from 'context/app-initial';
import { ActionType } from 'context/app-actions';
import ConverterResponse from 'interfaces/ConverterResponse';
import debounce from 'lib/utils/debounce';
import AppContextState from 'interfaces/AppContextState';
import { SUGGESTIONS_DEBOUNCE } from 'lib/constants';

interface Props {
  children: ReactNode;
}

const AppContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  const searchSuggestions = useMemo(
    () =>
      debounce(
        (numericCode: AppContextState['numericCode']) =>
          getSuggestions(numericCode),
        SUGGESTIONS_DEBOUNCE,
      ),
    [],
  );

  useEffect(() => {
    searchSuggestions(state.numericCode);
  }, [state.numericCode, searchSuggestions]);

  const addNumber = (number: number) => {
    if (number > 1)
      dispatch({ type: ActionType.ADD_NUMBER, payload: number.toString() });
  };

  const replaceNumericCode = (numericCode: string) => {
    if (numericCode.match(/^(\s*|[2-9]+)$/))
      dispatch({ type: ActionType.REPLACE_NUMERIC_CODE, payload: numericCode });
  };

  const { numericCode, suggestions, suggestionIndex } = state;

  return (
    <AppContext.Provider
      value={{
        numericCode,
        suggestions,
        suggestionIndex,
        dispatch,
        addNumber,
        replaceNumericCode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
