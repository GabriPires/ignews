import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('evento recebido');

  res.status(200).json({ ok: true });
};

export default handler;
