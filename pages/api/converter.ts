import ConverterResponse from 'interfaces/ConverterResponse';
import type { NextApiRequest, NextApiResponse } from 'next';

export default (
  req: NextApiRequest,
  res: NextApiResponse<ConverterResponse>,
) => {
  res.status(200).json({ suggestions: ['do', 'doer', 'doers', 'done'] });
};
