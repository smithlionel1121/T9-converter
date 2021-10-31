import AppContext from 'context/app-context';
import { useContext } from 'react';

const SuggestionsList = () => {
  const { suggestions } = useContext(AppContext);
  return (
    <div>
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionsList;
