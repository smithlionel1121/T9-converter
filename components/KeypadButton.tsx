import KeypadElement from 'interfaces/KeypadElements';
import styles from './KeypadButton.module.scss';

interface Props {
  element: KeypadElement;
}

const KeypadButton = ({ element }: Props) => {
  const { number, letters } = element;
  return (
    <button type="button" className={styles.keypadButton}>
      <div className={styles.content}>
        <span className={styles.number}>{number}</span>
        <span className={styles.letters}>{letters.join('')}</span>
      </div>
    </button>
  );
};

export default KeypadButton;
