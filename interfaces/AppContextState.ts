export default interface AppContextState {
  numericCode: string;
  suggestions: string[];
  addNumber: (number: string) => void;
  replaceNumericCode: (numericCode: string) => void;
  getSuggestions: () => void;
}
