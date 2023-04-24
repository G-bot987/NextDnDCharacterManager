import type { NextApiRequest, NextApiResponse } from 'next'

type Data = any

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {


    console.log('req')
    console.log(req.body)
    console.log('--')


    const calculatePointBuyCost = (abilityScores: number) => {
        const pointsSpentTable = [0, 1, 2, 3, 4, 5, 7, 9];
        const pointBuyCost = Object.values(abilityScores).reduce((totalPointsSpent, score) => {
            const pointsSpent = pointsSpentTable[score - 8];
            return totalPointsSpent + pointsSpent;
        }, 0);
        if (pointBuyCost === 27) {

            return pointBuyCost;
        } else {
            return 'you have not spent 27 points'
        }
    };



    const pointBuyCost = calculatePointBuyCost(req.body);




    res.status(200).json({ test: 'test' })
}

// inputs

// status with boolean, msg spend more or less points. is the return