import styles from './Keypad.module.scss';

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const Keypad = () => {
  return (
    <ul className={styles.keypad}>
      {list.map((number) => (
        <li className={styles.button}>{number}</li>
      ))}
    </ul>
  );
};

export default Keypad;
