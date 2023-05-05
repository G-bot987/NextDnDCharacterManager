import type { NextApiRequest, NextApiResponse } from 'next'

type Data = any

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log('in req')
    console.log(req.body.ScoreToRender)
    console.log('--')

}