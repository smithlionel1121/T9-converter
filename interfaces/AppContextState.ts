export default interface AppContextState {
  numericCode: string;
  suggestions: string[];
  addNumber: (number: number) => void;
  replaceNumericCode: (numericCode: string) => void;
  getSuggestions: () => void;
}
