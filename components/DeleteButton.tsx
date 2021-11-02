import { useContext } from 'react';
import AppContext from 'context/app-context';
import { ActionType } from 'context/app-actions';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import styles from './DeleteButton.module.scss';

const DeleteButton = () => {
  const { dispatch } = useContext(AppContext);

  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => dispatch({ type: ActionType.DELETE_NUMBER })}
    >
      <RiDeleteBack2Fill className={styles.icon} />
    </button>
  );
};

export default DeleteButton;
