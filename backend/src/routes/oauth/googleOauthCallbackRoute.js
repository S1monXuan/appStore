import jwt from 'jsonwebtoken';
import { getGoogleUser } from './getGoogleUser';
import { updateOrCreateUserFromOauthGoogle } from './updateOrCreateUserFromOauthGoogle';

export const googleOauthCallbackRoute = {
    path: '/google/callback',
    method: 'get',
    handler: async (req, res) => {
        const { code } = req.query;
        
        const oauthUserInfo = await getGoogleUser({ code });
        const updatedUser = await updateOrCreateUserFromOauthGoogle({ oauthUserInfo });
        const { _id: id, isVerified, email} = updatedUser;

        jwt.sign(
            { id, isVerified, email},
            process.env.JWT_SECRET,
            (err, token) => {
                if (err) return res.sendStatus(500);
                res.redirect(`http://localhost:3000/login?token=${token}`)
            }
        );
    }
}