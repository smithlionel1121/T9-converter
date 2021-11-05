import { createReadStream } from 'fs';
import ConverterResponse from 'interfaces/ConverterResponse';
import Trie from 'lib/Trie';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createInterface } from 'readline';

const trie = new Trie();

const loadDictionary = () => {
  const file = createInterface({
    input: createReadStream('lib/data/dictionary.txt'),
    output: process.stdout,
    terminal: false,
  });

  file.on('line', (word) => trie.insertWord(word));
};

loadDictionary();

export default (
  req: NextApiRequest,
  res: NextApiResponse<ConverterResponse>,
) => {
  const {
    body: { numericCode },
  } = req;

  trie.searchWord(numericCode);

  res.status(200).json({ suggestions: trie.suggestions });
};
