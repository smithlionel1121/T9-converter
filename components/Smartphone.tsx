import Keypad from './Keypad';
import styles from './Smartphone.module.scss';
import TextDisplay from './TextDisplay';

const Smartphone = () => {
  return (
    <div className={styles.smartphone}>
      <div className={styles.screen}>
        <div className={styles.converter}>
          <TextDisplay />
        </div>
        <div className={styles.keypad}>
          <Keypad />
        </div>
      </div>
    </div>
  );
};

export default Smartphone;
