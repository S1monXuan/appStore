import { getDbConnection } from "../db";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid';
import { sendEmail } from "../util/sendEmail";
import ip from 'ip';


export const SignUpPage = {
    path: '/signup',
    method: 'post',
    handler: async (req, res) => {
        const {email, name, password} = req.body;

        const db = getDbConnection('xx-webapp');
        const user = await db.collection('userList').findOne({email: email});

        if(user){
            res.sendStatus(400);
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const verificationString = uuid();

        const startingInfo = {
            balance: 5,
            ownedApp: [],
            uploadedApp: []
        };

        const result = await db.collection('userList').insertOne({
            email: email,
            name: name,
            passwordHash,
            balance: 5,
            ownedApp: [],
            uploadedApp: [],
            isVerified: false,
            verificationString,
        })

        // console.log('before Try' + email)
        // console.log(ip.address());
        try {
            await sendEmail({
                to: email,
                from: 'xinmaixuan@hotmail.com',
                subject: 'Please verify your email',
                text: `
                    Thanks for signing up! To verify your email, click here:
                    http://${ip.address()}:8080/verify-email/${verificationString}
                `,
            });
        // console.log('after Try' + {verificationString});

        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }

        const { insertId } = result;

        jwt.sign({
            id: insertId,
            isVerified: false,
            email,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '2d',
        },
        (err, token) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json({ token });
        });
    }
}