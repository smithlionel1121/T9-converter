import AppContext from 'context/app-context';
import { useContext } from 'react';
import styles from './TextDisplay.module.scss';

const TextDisplay = () => {
  const { numericCode } = useContext(AppContext);
  return (
    <input
      type="text"
      placeholder="Enter text..."
      className={styles.display}
      value={numericCode}
      readOnly
    />
  );
};

export default TextDisplay;
