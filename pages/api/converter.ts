import { once } from 'events';
import { createReadStream } from 'fs';
import ConverterResponse from 'interfaces/ConverterResponse';
import Trie from 'lib/Trie';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createInterface } from 'readline';

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ConverterResponse>,
) => {
  const trie = new Trie();

  const {
    body: { code: numericCode },
  } = req;

  const file = createInterface({
    input: createReadStream('lib/data/dictionary.txt'),
    output: process.stdout,
    terminal: false,
  });

  file.on('line', (word) => trie.insertWord(word));
  await once(file, 'close');

  trie.searchWord(numericCode);

  res.status(200).json({ suggestions: trie.suggestions });
};
