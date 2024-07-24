// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sanityClient from '@sanity/client';

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
};

const client = sanityClient(config);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = JSON.parse(req.body);

  try {
    await  client.create({
      _type: 'attendance',
      name,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Could not submit attendance', error });
  }

  res.status(200).json({ message: 'Attendance Submitted' });
}
