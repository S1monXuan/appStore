import { useNavigate } from 'react-router-dom';

export const EmailVerificationSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="content-container">
            <h1>Success!</h1>
            <p>
                Thanks for verifying your email, now you can use all the app's features.
                The email may lag due to server side flucta
                The email may lag due to the server fluctate, please wait patiently. 
                You can use the all function without verification.
                Have fun! :)
            </p>
            <button onClick={() => navigate('/')}>Go to home page</button>
        </div>
    );
}