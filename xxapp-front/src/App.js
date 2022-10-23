import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import HomePage from "./pages/HomePage";
//import TopBar from "./components/topBar";
import NotFoundPage from "./pages/NotFoundPage";
import DetailPage from "./pages/DetailPage";
import UserIndex from "./pages/UserPages/UserIndex";
import UserPayment from "./pages/UserPages/UserPayment";
import UserPaymentAdd from "./pages/UserPages/UserPaymentAdd";
import UserPurchase from "./pages/UserPages/UserPurchase";
import PasswordUpdate from "./pages/UserPages/PasswordUpdate";
import AccountInfoUpdate from "./pages/UserPages/AccountInfoUpdate";
// import UserPage from "./pages/UserPage";

import LoginPage from "./pages/Login/LoginPage";
import SignUpPage from "./pages/Login/SignUpPage";

import { PrivateRoute } from "./pages/Login/auth/PrivateRoute";
import { PleaseVerifyEmailPage } from "./pages/Login/PleaseVerifyEmailPages";
import { EmailVerificationLandingPage } from "./pages/Login/EmailVerificationLandingPage";
import { ForgotPasswordPage } from "./pages/Login/ForgotPasswordPage";
import { PasswordResetLandingPage } from "./pages/Login/PasswordResetLandingPage";
import { UserAccountDeleteConfirm } from "./pages/UserPages/UserAccountDeleteConfirm";
import { UploadNewApp } from "./pages/UserPages/UploadNewApp";
import { UploadAppFile } from "./pages/UserPages/UploadAppFile";

import './App.css'
class App extends Component{
    render() {
        return(
            <Router>
                <div className="App">
                <div className="app-top">
                    {/* <TopBar /> */}
                </div>
                <div id='page-body'>
                    <Routes>
                        <Route path="/"  element={<PrivateRoute/>} >
                            <Route path="/" element={<HomePage/>}/>
                            </ Route>
                        {/* for category and detail page */}
                        <Route path="/category/:env" element={<HomePage />} />
                        <Route path="/category/:env/:type" element={<HomePage />} />
                        <Route path="/details/:id" element={<DetailPage />} />
                        {/* <Route path="/user/:name" element={<UserPage />} /> */}

                        {/* for userpage */}
                        <Route path="/user/:id" element={<UserIndex />} />
                        <Route path="/user/:id/payment" element={<UserPayment />} />
                        <Route path="/user/:id/payment/add" element={<UserPaymentAdd />} />
                        <Route path="/user/:id/purchase" element={<UserPurchase />} />
                        <Route path="/user/:id/passwordUpdate" element={<PasswordUpdate />} />
                        <Route path="/user/:id/accountinfoUpdate" element={<AccountInfoUpdate />} />
                        <Route path="/user/:id/deleteConfirm" element={<UserAccountDeleteConfirm />} />
                        <Route path="/user/:id/createApp" element={<UploadNewApp />} />
                        <Route path="/user/:id/createApp/:appId" element={<UploadAppFile />} />

                        {/* for login, signup, reset password */}
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} /> 
                        <Route path="/please-verify" element={<PleaseVerifyEmailPage />} /> 
                        <Route path="/verify-email/:verificationString" element={<EmailVerificationLandingPage />} /> 
                        <Route path="/forgot-password" element={<ForgotPasswordPage />} /> 
                        <Route path="/reset-password/:passwordResetCode" element={<PasswordResetLandingPage />} />


                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </div>
                </div>
            </Router>
        )
    };
}

export default App;