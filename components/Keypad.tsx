import keypadElements from 'lib/data/keypadElements.json';
import KeypadElement from 'interfaces/KeypadElements';

import styles from './Keypad.module.scss';
import smartphoneStyles from './Smartphone.module.scss';
import KeypadButton from './KeypadButton';
import DeleteButton from './DeleteButton';
import PhoneSwitchButton from './PhoneSwitchButton';

const Keypad = () => {
  return (
    <ul className={`${styles.keypad} ${smartphoneStyles.keypad}`}>
      {keypadElements.map((element: KeypadElement) => (
        <li key={element.number} className={styles[`pad-${element.number}`]}>
          <KeypadButton element={element} />
        </li>
      ))}
      <li className={styles.switchPad}>
        <PhoneSwitchButton />
      </li>
      <li className={styles.deletePad}>
        <DeleteButton />
      </li>
    </ul>
  );
};

export default Keypad;
