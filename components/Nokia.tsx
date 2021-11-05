import styles from './Nokia.module.scss';
import Keypad from './Keypad';
import SuggestionsList from './SuggestionsList';
import TextDisplay from './TextDisplay';

const Nokia = () => {
  return (
    <div className={styles.phone}>
      <div className={styles.nokia}>
        <div className={styles.top}>
          <div className={styles.tab} />
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.dot} />
            <h1>Nokia</h1>
          </div>
          <div className={styles.screen}>
            <div className={styles.display}>
              <TextDisplay />
              <SuggestionsList />
            </div>
          </div>
          <div className={styles.buttons} />
          <div className={styles.keypad}>
            <Keypad />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nokia;
