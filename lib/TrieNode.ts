class TrieNode {
  words: Set<string>;

  children: Map<number, TrieNode>;

  constructor() {
    this.words = new Set();
    this.children = new Map();
  }

  get hasLeaf() {
    return !!this.words.size;
  }

  addWord(word: string) {
    this.words.add(word);
  }
}
export default TrieNode;
