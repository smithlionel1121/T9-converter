import Keypad from './Keypad';
import styles from './Smartphone.module.scss';
import SuggestionsList from './SuggestionsList';
import TextDisplay from './TextDisplay';

const Smartphone = () => {
  return (
    <div className={styles.smartphone}>
      <div className={styles.converter}>
        <TextDisplay />
        <SuggestionsList />
      </div>
      <Keypad />
    </div>
  );
};

export default Smartphone;
