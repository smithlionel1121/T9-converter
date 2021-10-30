import Trie from 'lib/Trie';

let trie: Trie;

interface WordMapping {
  word: string;
  code: string;
  incompleteCode: string;
  incorrectCode: string;
}
const wordMapping: WordMapping = {
  word: 'testing',
  code: '8378464',
  incompleteCode: '83784',
  incorrectCode: '22222222',
};

describe('Trie tests', () => {
  beforeEach(() => {
    trie = new Trie();
  });

  it('should be initialized with no suggestions', () => {
    expect(trie.suggestions.length).toBe(0);
  });

  it('should suggest inserted words when searched for', () => {
    trie.insertWord(wordMapping.word);
    trie.searchWord(wordMapping.code);

    expect(trie.suggestions).toContain(wordMapping.word);
  });

  it('should suggest words from incomplete searches that match the start of inserted words', () => {
    trie.insertWord(wordMapping.word);
    trie.searchWord(wordMapping.incompleteCode);

    expect(trie.suggestions).toContain(wordMapping.word);
  });

  it('should return no suggestions if there is no match with inserted words', () => {
    trie.insertWord(wordMapping.word);
    trie.searchWord(wordMapping.incorrectCode);

    expect(trie.suggestions.length).toBe(0);
  });
});
