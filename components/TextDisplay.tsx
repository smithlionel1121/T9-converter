import AppContext from 'context/app-context';
import { useContext } from 'react';
import styles from './TextDisplay.module.scss';

const TextDisplay = () => {
  const { numericCode, replaceNumericCode } = useContext(AppContext);
  return (
    <input
      type="text"
      placeholder="Enter text..."
      className={styles.display}
      value={numericCode}
      onChange={(e) => replaceNumericCode(e.target.value)}
    />
  );
};

export default TextDisplay;
