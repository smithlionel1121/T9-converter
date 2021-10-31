export default interface AppContextState {
  numericCode: string;
  addNumber: (number: string) => void;
  replaceNumericCode: (numericCode: string) => void;
}
