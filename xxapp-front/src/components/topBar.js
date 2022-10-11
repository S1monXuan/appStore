import React, { useState } from 'react';
import { useToken } from '../pages/Login/auth/useToken';
import { useNavigate } from 'react-router-dom';
// import './topBar.css'

const TopBar = () => {
    const navigate = useNavigate();

    const [loginDetailDisplay, setLoginDetailDisplay] = useState(false)
    // on click for get detail page for login settings

    const [token, setToken] = useToken();

    const parseJwt = (token) => {
        try {
          return JSON.parse(atob(token.split('.')[1])) ;
        } catch (e) {
          return null;
        }
      };
    
    const {id, email} = parseJwt(token);
    // console.log(id, email)

    const logOut = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <div className='top-bar-div'>
            <div className='logo-word'> Logo Pos</div>
            <div className='login-medium-spare'>af</div>
            <div className='login-right'
                onClick={() => setLoginDetailDisplay(!loginDetailDisplay)}
            >
                Welcome: {email}
                {
                    (loginDetailDisplay === true) ? 
                    <div className='login-detail'>
                        <div className='userDetail' onClick={() => navigate(`/`)}> Back To Index </div>
                        <div className='userDetail' onClick={() => navigate(`/user/${id}`)}> User Profile </div>
                        <div className='Log Out' onClick={() => logOut()}> Log Out </div>
                    </div>
                    :
                    <></>
                }
                
            </div>

        </div>
    )
}

export default TopBar;