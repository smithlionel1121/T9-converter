import Keypad from './Keypad';
import styles from './Smartphone.module.scss';

const Smartphone = () => {
  return (
    <div className={styles.smartphone}>
      <div className={styles.screen}>
        <div className={styles.converter} />
        <div className={styles.keypad}>
          <Keypad />
        </div>
      </div>
    </div>
  );
};

export default Smartphone;
