import axios from 'axios';
import ConverterResponse from 'interfaces/ConverterResponse';
import { FormEvent, useState } from 'react';

type Suggestion = ConverterResponse['suggestions'];

const Form = () => {
  const [numberCode, setNumberCode] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Suggestion>([]);

  const onChange = (event: FormEvent<HTMLInputElement>): void =>
    setNumberCode(event.currentTarget.value);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const res = await axios.post<ConverterResponse>('/api/converter', {
      code: numberCode,
    });
    const { data } = res;
    setSuggestions(data.suggestions);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="number" name="T9" value={numberCode} onChange={onChange} />
      <button type="submit">Submit</button>
      {!!suggestions.length && (
        <ul>
          {suggestions.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default Form;
