import DisplayContext from 'context/display-context';
import { useState } from 'react';
import initialState from 'context/display-initial';
import DisplayContextState from 'interfaces/DisplayContextState';
import Nokia from './Nokia';
import Smartphone from './Smartphone';

const DisplayContextProvider = () => {
  const [display, setDisplay] = useState<DisplayContextState['display']>(
    initialState.display,
  );

  const toggleDisplay = () =>
    setDisplay(display === 'smartphone' ? 'nokia' : 'smartphone');

  return (
    <DisplayContext.Provider value={{ display, toggleDisplay }}>
      {display === 'smartphone' ? <Smartphone /> : <Nokia />}
    </DisplayContext.Provider>
  );
};

export default DisplayContextProvider;
