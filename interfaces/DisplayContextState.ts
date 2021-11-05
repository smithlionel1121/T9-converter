export type Display = 'smartphone' | 'nokia';

export default interface DisplayContextState {
  display: Display;
  toggleDisplay: () => void;
}
