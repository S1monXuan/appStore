import bcrypt from 'bcrypt';
import { getDbConnection } from '../db';

export const resetPasswordRoute = {
    path: '/reset-password/:passwordResetCode',
    method: 'put',
    handler: async (req, res) => {
        const { passwordResetCode } = req.params;
        const { newPassword } = req.body;

        const db = getDbConnection('xx-webapp');

        const newPasswordHash = await bcrypt.hash(newPassword, 10);

        const result = await db.collection('userList')
            .findOneAndUpdate({ passwordResetCode }, {
                $set: { passwordHash: newPasswordHash },
                $unset: { passwordResetCode: '' },
            });

        if (result.lastErrorObject.n === 0) return res.sendStatus(404);

        res.sendStatus(200);
    },
}