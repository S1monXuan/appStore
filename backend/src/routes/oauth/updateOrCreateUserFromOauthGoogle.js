import { getDbConnection } from '../../db'

export const updateOrCreateUserFromOauthGoogle = async ({ oauthUserInfo }) => {
    const {
        id: googleId,
        verified_email: isVerified,
        email,
    } = oauthUserInfo;

    const db = getDbConnection('xx-webapp');
    const existingUser = await db.collection('userList').findOne({ email });

    if (existingUser) {
        const result = await db.collection('userList').findOneAndUpdate(
            { email },
            { $set: { googleId, isVerified } },
            { returnOriginal: false },
        );
        return result.value;
    } else {
        const result = await db.collection('userList').insertOne({
            email,
            googleId,
            isVerified,
            name: email,
            balance: 5,
            ownedApp: [],
            uploadedApp: [],
        });
        consult.log(result);
        return result.ops[0];
    }
}