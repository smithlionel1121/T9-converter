import AppContext from 'context/app-context';
import { useContext } from 'react';
import styles from './SuggestionsList.module.scss';
import smartphoneStyles from './Smartphone.module.scss';
import Suggestion from './Suggestion';

const SuggestionsList = () => {
  const { suggestions } = useContext(AppContext);
  return (
    <ul
      className={`${styles.list} ${smartphoneStyles.suggestions}`}
      data-test-id="suggestionsList"
    >
      {suggestions.map((suggestion) => (
        <li key={suggestion} className={styles.suggestion}>
          <Suggestion suggestion={suggestion} />
        </li>
      ))}
    </ul>
  );
};

export default SuggestionsList;
