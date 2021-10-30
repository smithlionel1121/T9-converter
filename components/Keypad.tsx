import styles from './Keypad.module.scss';
import KeypadButton from './KeypadButton';

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const Keypad = () => {
  return (
    <ul className={styles.keypad}>
      {list.map((number) => (
        <li key={number} className={styles.element}>
          <KeypadButton number={number} letters={['a', 'b', 'c']} />
        </li>
      ))}
    </ul>
  );
};

export default Keypad;
