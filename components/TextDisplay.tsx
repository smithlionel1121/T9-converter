import AppContext from 'context/app-context';
import { useContext } from 'react';
import styles from './TextDisplay.module.scss';

const TextDisplay = () => {
  const { numericCode, replaceNumericCode, getSuggestions } =
    useContext(AppContext);
  return (
    <div className={styles.display}>
      <input
        type="text"
        placeholder="Enter text..."
        value={numericCode}
        className={styles.input}
        onChange={(e) => replaceNumericCode(e.target.value)}
      />
      <button type="submit" onClick={() => getSuggestions()}>
        Submit
      </button>
    </div>
  );
};

export default TextDisplay;
