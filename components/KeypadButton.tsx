import KeypadElement from 'interfaces/KeypadElements';
import AppContext from 'context/app-context';
import { useContext } from 'react';
import styles from './KeypadButton.module.scss';

interface Props {
  element: KeypadElement;
}

const KeypadButton = ({ element }: Props) => {
  const { number, letters } = element;
  const { addNumber } = useContext(AppContext);

  return (
    <button
      type="button"
      className={styles.keypadButton}
      onClick={() => addNumber(number.toString())}
    >
      <div className={styles.content}>
        <span className={styles.number}>{number}</span>
        <span className={styles.letters}>{letters.join('')}</span>
      </div>
    </button>
  );
};

export default KeypadButton;
