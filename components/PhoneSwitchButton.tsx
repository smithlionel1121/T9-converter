import { useContext } from 'react';
import DisplayContext from 'context/display-context';
import { FcCellPhone } from 'react-icons/fc';
import { MdSmartphone } from 'react-icons/md';
import styles from './IconButton.module.scss';

const PhoneSwitchButton = () => {
  const { display, toggleDisplay } = useContext(DisplayContext);

  return (
    <button type="button" className={styles.button} onClick={toggleDisplay}>
      {display === 'smartphone' ? (
        <FcCellPhone className={styles.icon} />
      ) : (
        <MdSmartphone className={styles.icon} color="white" />
      )}
    </button>
  );
};

export default PhoneSwitchButton;
