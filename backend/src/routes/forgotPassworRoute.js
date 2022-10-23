import { getDbConnection } from "../db";
import {v4 as uuid} from 'uuid';
import { sendEmail } from "../util/sendEmail";

export const forgotPasswordRoute = {
    path: '/forgot-password/:email',
    method: 'put',
    handler: async (req, res) => {
        const { email } = req.params;
        // console.log(email);
        const db = getDbConnection('xx-webapp');
        const passwordResetCode = uuid();
        // console.log(passwordResetCode);
        // console.log(await db.collection('userList').findOne({email: email}));
        const result  = await db.collection('userList').updateOne({ email: email }, { $set: { passwordResetCode } });
        // console.log(result);


        if (result.modifiedCount > 0) {
            try {
                console.log('sendEmail');
                await sendEmail({
                    to: email,
                    from: 'xinmaixuan@hotmail.com',
                    subject: 'Password Reset',
                    text: `
                        To reset your password, click this link:
                        http://localhost:3000/reset-password/${passwordResetCode}
                    `
                });
            } catch (e) {
                console.log(e);
                res.sendStatus(500);
            }
        }

        res.sendStatus(200);
    }
}