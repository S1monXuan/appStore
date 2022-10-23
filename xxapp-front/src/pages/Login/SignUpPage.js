import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useToken } from './auth/useToken';
import axios from 'axios';
import './SignUpPage.css';

const SignUpPage = () => {
    const [token, setToken] = useToken();

    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    
    const navigate = useNavigate();

    const onSignUpClicked = async() => {
        const response = await axios.post('/signup', {
            email: emailValue,
            name: nameValue,
            password: passwordValue,
        });
        const { token } = response.data;
        setToken(token);
        navigate('/please-verify');
    }
    return(
        <div className = 'content-container'>
            <h1>Sign Up</h1>
            {errorMessage && <div className='fail'> {errorMessage} </div>}
            <input 
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="someone@email.com" />            
            <input 
                value={nameValue}
                onChange={e => setNameValue(e.target.value)}
                placeholder="username" />
            <input 
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                type = "password" placeholder="password"/>
            <input 
                value={confirmPasswordValue}
                onChange={e => setConfirmPasswordValue(e.target.value)}
                type = "password" placeholder="password"/>
            <button
                disabled={!emailValue || !passwordValue || !nameValue ||
                    passwordValue !== confirmPasswordValue
                }
                onClick={onSignUpClicked}
            >Sign Up</button>
            <button
                onClick={() => navigate('/login')}
            >Already have an account? Login</button>
        </div>
    )
}

export default SignUpPage;