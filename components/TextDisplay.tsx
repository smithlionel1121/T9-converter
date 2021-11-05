import AppContext from 'context/app-context';
import { KeyboardEventHandler, useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { ActionType } from 'context/app-actions';
import styles from './TextDisplay.module.scss';
import smartphoneStyles from './Smartphone.module.scss';

const TextDisplay = () => {
  const { numericCode, suggestions, dispatch, addNumber, replaceNumericCode } =
    useContext(AppContext);

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
        data-test-id="inputDisplay"
        placeholder="Enter text..."
        value={suggestions[0]?.slice(0, numericCode.length) ?? numericCode}
        onKeyDown={handleKeyDown}
        readOnly
      />
      <TiDelete
        className={styles.deleteIcon}
        onClick={() => dispatch({ type: ActionType.CLEAR_NUMERIC_CODE })}
      />
    </div>
  );
};

export default TextDisplay;
