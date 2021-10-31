import styles from './TextDisplay.module.scss';

const TextDisplay = () => {
  return (
    <input
      type="number"
      placeholder="Enter text..."
      className={styles.display}
    />
  );
};

export default TextDisplay;
