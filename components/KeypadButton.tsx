import styles from './KeypadButton.module.scss';

interface Props {
  number: number;
  letters: string[];
}

const KeypadButton = ({ number, letters }: Props) => {
  return (
    <button type="button" className={styles.keypadButton}>
      <span>{number}</span>
      <span>{letters}</span>
    </button>
  );
};

export default KeypadButton;
