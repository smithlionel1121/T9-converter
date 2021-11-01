import AppContext from 'context/app-context';
import { useContext } from 'react';

interface Props {
  suggestion: string;
}
const Suggestion = ({ suggestion }: Props) => {
  const { numericCode } = useContext(AppContext);

  return (
    <span>
      <strong>{suggestion.slice(0, numericCode.length)}</strong>
      {suggestion.slice(numericCode.length)}
    </span>
  );
};

export default Suggestion;
