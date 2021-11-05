import TrieNode from 'lib/TrieNode';

let trieNode: TrieNode;
const testWord = 'testing';
const key = 4;

describe('TrieNode tests', () => {
  beforeEach(() => {
    trieNode = new TrieNode();
  });

  it('should be initialized with no words', () => {
    expect(trieNode.words.size).toBe(0);
  });

  it('should be initialized with no children', () => {
    expect(trieNode.children.size).toBe(0);
  });

  it('should be able to add words', () => {
    trieNode.addWord(testWord);
    expect(trieNode.words).toContain(testWord);
  });

  it('should evaluate hasLeaf to false if it does not contain any complete words', () => {
    trieNode.words = new Set([]);
    expect(trieNode.hasLeaf).toBe(false);
  });

  it('should evaluate hasLeaf to true if it contains any complete words', () => {
    trieNode.words = new Set([testWord]);
    expect(trieNode.hasLeaf).toBe(true);
  });

  it('should be able to create retrievable child nodes', () => {
    trieNode.children.set(key, new TrieNode());
    expect(trieNode.children.has(key)).toBe(true);

    const child = trieNode.children.get(key);
    expect(child).toBeInstanceOf(TrieNode);
  });
});
