import { ObjectID } from 'mongodb';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db';

export const verifyEmailRoute = {
    path: '/verify-email',
    method: 'put',
    handler: async (req, res) => {
        const { verificationString } = req.body;
        const db = getDbConnection('xx-webapp');
        const result = await db.collection('userList').findOne({
            verificationString,
        });

        if (!result) return res.status(401).json({ message: 'The email verification code is incorrect' });

        const { _id: id, email} = result;

        await db.collection('userList').updateOne({ _id: ObjectID(id) }, {
            $set: { isVerified: true }
        });

        jwt.sign(
            { id, isVerified: true, email},
             process.env.JWT_SECRET,
            { 
                expiresIn: '2d' 
            },
            (err, token) => {
            if (err) { 
                return res.sendStatus(500).json(err);
            }
            res.status(200).json({ token });
        });
    }
}