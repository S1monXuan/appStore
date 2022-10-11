import { forgotPasswordRoute } from "./forgotPassworRoute";
import { LoginRoute } from "./loginRoute";
import { getGoogleOauthUrlRoute } from "./oauth/getGoogleUrlRoute";
import { googleOauthCallbackRoute } from "./oauth/googleOauthCallbackRoute";
import { resetPasswordRoute } from "./resetPasswordRoute";
import { GetListBasedOnSearchRoute } from "./sideBar/searchBarRoute";
import { SignUpPage } from "./signUpRoute";
import { testEmailRoute } from "./testEmailRoute";
import { GetCategoryEnv } from "./type/getCategoryEnv";
import { GetCategoryEnvType } from "./type/getCategoryEnvType";
import { GetDetails } from "./type/getDetails";
import { GetIndex } from "./type/getIndex";
import { GetType } from "./type/getType";
import { GetAccountInfo } from "./user/getAccountinfoUpdate";
import { GetUserPayment } from "./user/getUserPayment";
import { GetUserPurchase } from "./user/getUserPurchase";
import { PostAccountInfo } from "./user/postAccountinfoUpdate";
import { PostPasswordUpdate } from "./user/postPasswordUpdate";
import { PostUserPayment } from "./user/postUserPayment";
import { GetUserid } from "./user/user";
import { verifyEmailRoute } from "./verifyEmailRoute";
import { appDownload } from "./download/appDownloadRoute";
import { getDeleteUserAccount } from "./user/getDeleteUserAccount";
import { getUploadAppType } from "./getUploadAppType";
import { postCreateApp } from "./user/postUserCreateApp";
import { getUserCreateAppFile } from "./user/getUserCreateAppFile";
export const routes = [
    SignUpPage,
    LoginRoute,
    verifyEmailRoute,
    forgotPasswordRoute,
    resetPasswordRoute,
    getGoogleOauthUrlRoute,
    googleOauthCallbackRoute,

    testEmailRoute,

    GetIndex,
    GetType,
    GetCategoryEnv,
    GetCategoryEnvType,

    GetUserid,
    GetUserPayment,
    PostUserPayment,
    GetUserPurchase,
    GetAccountInfo,
    PostAccountInfo,
    PostPasswordUpdate,
    getDeleteUserAccount,
    getUploadAppType,
    postCreateApp,
    getUserCreateAppFile,
    
    GetDetails,
    GetListBasedOnSearchRoute,

    appDownload,
];