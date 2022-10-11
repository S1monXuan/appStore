import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToken } from "./auth/useToken";
import { useQueryParams } from "../util/useQuaryParams";

const LoginPage = () => {
    const [, setToken] = useToken();

    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const [googleOauth, setGoogleOauth] = useState('');
    const { token: oauthToken } = useQueryParams(); 

    const navigate = useNavigate();

    useEffect(() => {
        if( oauthToken ) {
            setToken(oauthToken);
            navigate('/');
        }
    }, [oauthToken, setToken, navigate])
    
    useEffect(() => {
        const loadOauthUrl = async () => {
            try{
                const response = await axios.get('/google/url');
                const { url } = response.data;
                setGoogleOauth(url); 
            } catch (e) {
                console.log(e);
            }
        }

        loadOauthUrl();
    }, [])


    const onLogInClicked = async () =>{
        const response = await axios.post('/login',{
            emailValue: emailValue,
            passwordValue: passwordValue,
        });

        const { token } = response.data;
        setToken(token);
        navigate('/');
    }

    return(
        <div className="content-container">
            <h1> Log in </h1>
            {errorMessage && <div className="fail"> {errorMessage} </div>}
            <input 
                value={emailValue} 
                onChange={e => setEmailValue(e.target.value)}
                placeholder="name@addr.com"    
            />
            <input 
                type="password"
                value={passwordValue} 
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="Your password"    
            />
            <button
                disabled={!emailValue || !passwordValue}
                onClick={onLogInClicked} >
                Log In
            </button>
            <button
                onClick={() => navigate('/forgot-password')} >
                Forgot Password
            </button>
            <button
                onClick={() => navigate('/signup')} >
                Sign Up
            </button>
            <button
                disabled={!googleOauth}
                onClick={() => { window.location.href = googleOauth }}
            >
                Log in Using Google
            </button>
        </div>
    )
}

export default LoginPage;