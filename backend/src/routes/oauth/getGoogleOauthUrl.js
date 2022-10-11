import { oauthClientGoogle } from "./oauthClient";

export const getGoogleOauthUrl = () => {
    const scopes = [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
    ];

    return oauthClientGoogle.generateAuthUrl({
        access_type: 'offline',
        prompt:'consent',
        scope: scopes,
    });
}