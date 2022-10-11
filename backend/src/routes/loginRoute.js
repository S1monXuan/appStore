import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db';

export const LoginRoute = {
    path: '/login',
    method: 'post',
    handler: async (req, res) => {
        const { emailValue, passwordValue } = req.body;
        const db = getDbConnection('xx-webapp');
        const user = await db.collection('userList').findOne({ email: emailValue });

        if (!user) return res.sendStatus(401);

        const { _id: id, isVerified, passwordHash, email} = user;

        const isCorrect = await bcrypt.compare(passwordValue, passwordHash);

        if (isCorrect) {
            jwt.sign({ 
                id, 
                isVerified, 
                email
            }, 
            process.env.JWT_SECRET, 
            { 
                expiresIn: '2d' 
            }, 
            (err, token) => {
                if (err) {
                    res.status(500).json(err);
                }
                res.status(200).json({ token });
            });
        } else {
            res.sendStatus(401);
        }
    },
}