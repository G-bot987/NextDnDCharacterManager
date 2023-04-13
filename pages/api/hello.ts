// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json([{ value: 1, selected: null, mod: -5 },
  { value: 2, selected: null, mod: -4 },
  { value: 3, selected: null, mod: -4 },
  { value: 4, selected: null, mod: -3 },
  { value: 5, selected: null, mod: -3 },
  { value: 6, selected: null, mod: -2 },
  { value: 7, selected: null, mod: -2 },
  { value: 8, selected: null, mod: -1 },
  { value: 9, selected: null, mod: -1 },
  { value: 10, selected: null, mod: 0 },
  { value: 11, selected: null, mod: 0 },
  { value: 12, selected: null, mod: 1 },
  { value: 13, selected: null, mod: 1 },
  { value: 14, selected: null, mod: 2 },
  { value: 15, selected: null, mod: 2 },
  { value: 16, selected: null, mod: 3 },
  { value: 17, selected: null, mod: 3 },
  { value: 18, selected: null, mod: 4 },
  { value: 19, selected: null, mod: 4 },
  { value: 20, selected: null, mod: 5 },])
}
