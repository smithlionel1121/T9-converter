import AppContext from 'context/app-context';
import { KeyboardEventHandler, useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import styles from './TextDisplay.module.scss';
import smartphoneStyles from './Smartphone.module.scss';

const TextDisplay = () => {
  const {
    numericCode,
    suggestions,
    addNumber,
    replaceNumericCode,
    clearNumericCode,
  } = useContext(AppContext);

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.key === 'Backspace') replaceNumericCode(numericCode.slice(0, -1));
    if (!e.key.match(/^[2-9]$/)) return;
    addNumber(parseInt(e.key, 10));
  };

  return (
    <div className={`${styles.display} ${smartphoneStyles.display}`}>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter text..."
        value={suggestions[0]?.slice(0, numericCode.length) ?? numericCode}
        onKeyDown={handleKeyDown}
        readOnly
      />
      <TiDelete className={styles.deleteIcon} onClick={clearNumericCode} />
    </div>
  );
};

export default TextDisplay;
