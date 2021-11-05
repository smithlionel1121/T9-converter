import { once } from 'events';
import { createReadStream } from 'fs';
import ConverterResponse from 'interfaces/ConverterResponse';
import Trie from 'lib/Trie';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createInterface } from 'readline';

const trie = new Trie();

const loadDictionary = async (path: string) => {
  const file = createInterface({
    input: createReadStream(path),
    output: process.stdout,
    terminal: false,
  });

  file.on('line', (word) => trie.insertWord(word));
  await once(file, 'close');
};

const configureTrie = async () => {
  await loadDictionary('lib/data/frequency_dictionary.txt');
  loadDictionary('lib/data/dictionary.txt');
};

configureTrie();

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
