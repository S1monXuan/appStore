import React, { useState } from 'react';
import './topBar.css'

const TopBar = ({loginName}) => {
    const [loginStatus, setLoginStatus] = useState(false)
    const [loginDetailDisplay, setLoginDetailDisplay] = useState(false)

    return (
        <div className='top-bar-div'>
            <div className='logo-word'> Logo Pos</div>
            <div className='login-medium-spare'>af</div>
            <div>
                <div className='login-info'
                    onClick={() => setLoginDetailDisplay(!loginDetailDisplay)}> 
                    {   loginStatus ? 
                        <p>{loginName}</p> :
                        <p>Login Btn</p>
                    }
                </div>
                { loginDetailDisplay && loginStatus ? 
                    <div className='login-choose'>
                        <p>login page</p>
                        <p>name</p>
                    </div>
                    : null
                }
            </div>

        </div>
    )
}

export default TopBar;