import AppContext from 'context/app-context';
import { useContext } from 'react';
import styles from './TextDisplay.module.scss';
import smartphoneStyles from './Smartphone.module.scss';

const TextDisplay = () => {
  const { numericCode, replaceNumericCode } = useContext(AppContext);

  return (
    <div className={`${styles.display} ${smartphoneStyles.display}`}>
      <input
        type="text"
        placeholder="Enter text..."
        value={numericCode}
        className={styles.input}
        onChange={(e) => replaceNumericCode(e.target.value)}
      />
    </div>
  );
};

export default TextDisplay;
