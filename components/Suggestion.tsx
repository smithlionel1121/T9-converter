import AppContext from 'context/app-context';
import { useContext } from 'react';
import classNames from 'classnames/bind';
import keyMappings from 'lib/data/keypadMappings.json';
import KeyMap from 'interfaces/KeyMap';
import { ActionType } from 'context/app-actions';
import styles from './Suggestion.module.scss';

const cx = classNames.bind(styles);

interface Props {
  suggestion: string;
  index: number;
}

const keyMap: KeyMap = keyMappings;

const Suggestion = ({ suggestion, index }: Props) => {
  const { numericCode, suggestionIndex, dispatch, replaceNumericCode } =
    useContext(AppContext);

  const onClick = () => {
    let code: string;
    dispatch({ type: ActionType.SET_SELECTED_SUGGESTION, payload: index });
    if (numericCode.length < suggestion.length) {
      const remaining = [...suggestion.slice(numericCode.length)];
      code = numericCode;

      remaining.forEach((letter) => {
        code += keyMap[letter];
      });
      replaceNumericCode(code);
    }
  };

  const className = cx({
    suggestion: true,
    active: index === suggestionIndex,
  });

  return (
    <li className={className}>
      <button className={styles.button} onClick={onClick} type="button">
        <span>
          <strong>{suggestion.slice(0, numericCode.length)}</strong>
          {suggestion.slice(numericCode.length)}
        </span>
      </button>
    </li>
  );
};

export default Suggestion;
