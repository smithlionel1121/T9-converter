class TrieNode {
  words: string[];

  children: Map<number, TrieNode>;

  constructor() {
    this.words = [];
    this.children = new Map();
  }

  addWord(word: string) {
    this.words.push(word);
  }
}

export default TrieNode;
