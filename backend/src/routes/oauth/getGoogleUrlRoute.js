import { getGoogleOauthUrl } from "./getGoogleOauthUrl";

export const getGoogleOauthUrlRoute = {
    path:'/google/url',
    method:'get',
    handler: (req, res) => {
        const url = getGoogleOauthUrl();
        // console.log(url);
        res.status(200).json({ url });
    }
};