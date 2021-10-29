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

      if (!root.children.has(key)) root.children.set(key, new TrieNode());

      const child = root.children.get(key);
      if (child !== undefined) root = child;
    }

    root.addWord(word);
  }

  searchWord(numberCode: string) {
    let root = this.trie;

    for (const number of numberCode) {
      if (!number) return;

      const key = parseInt(number, 10);
      if (!root.children.has(key)) return;

      const child = root.children.get(key);
      if (child !== undefined) root = child;
    }

    if (root.hasLeaf) this.suggestions.push(...root.words);
    this.traverseTrie(root);
  }

  traverseTrie(root: TrieNode) {
    for (const child of root.children.values()) {
      if (child.hasLeaf) this.suggestions.push(...child.words);
      this.traverseTrie(child);
    }
  }
}

export default Trie;
