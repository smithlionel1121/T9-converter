import keypadElements from 'lib/data/keypadElements.json';
import KeypadElement from 'interfaces/KeypadElements';
import styles from './Keypad.module.scss';
import smartphoneStyles from './Smartphone.module.scss';
import KeypadButton from './KeypadButton';

const Keypad = () => {
  return (
    <ul className={`${styles.keypad} ${smartphoneStyles.keypad}`}>
      {keypadElements.map((element: KeypadElement) => (
        <li key={element.number} className={styles.element}>
          <KeypadButton element={element} />
        </li>
      ))}
    </ul>
  );
};

export default Keypad;
