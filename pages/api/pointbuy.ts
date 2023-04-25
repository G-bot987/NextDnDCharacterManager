import type { NextApiRequest, NextApiResponse } from 'next'

type Data = any

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const calculatePointBuyCost = (abilityScores: number) => {
        const pointsSpentTable = [0, 1, 2, 3, 4, 5, 7, 9];
        const pointBuyCost = Object.values(abilityScores).reduce((totalPointsSpent, score) => {

            const newScore = score.score
            const pointsSpent = pointsSpentTable[newScore - 8];
            return totalPointsSpent + pointsSpent;
        }, 0);

        if (pointBuyCost === 27) {

            return 'you have spent all your points';
        } else if (pointBuyCost >= 27) {
            return `you have spent ${pointBuyCost} you can only spent 27 points`
        } else {
            return `you have only spent ${pointBuyCost} points`
        }
    };

    const pointBuyCost = calculatePointBuyCost(req.body.data);
    res.status(200).json({ pointBuyCost })
}