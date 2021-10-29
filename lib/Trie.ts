import TrieNode from './TrieNode';
import keypadMappings from './data/keypadMappings.json';

interface KeyMap {
  [key: string]: number;
}

class Trie {
  suggestions: string[];

  trie: TrieNode;

  constructor() {
    this.suggestions = [];
    this.trie = new TrieNode();
  }

  static keyMap: KeyMap = keypadMappings;

  insertWord(word: string) {
    let root = this.trie;

    for (const letter of word) {
      if (!letter) return;

      const key = Trie.keyMap[letter];

      if (!root.children.get(key)) root.children.set(key, new TrieNode());

      const child = root.children.get(key);
      if (child !== undefined) root = child;
    }
  }
}

export default Trie;
