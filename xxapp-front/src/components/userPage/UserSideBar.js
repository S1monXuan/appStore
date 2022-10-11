import React from "react";
import { Link, useParams } from "react-router-dom";

const UserSideBar = () => {
    const params = useParams();
    const userid = params.id;
    
    return(
        <div className="user-sideBar-container">
            <div className="user-sideBar">
                <button className="user-sideBar-btn">
                    <Link to={`/user/${userid}`}>
                    General
                    </Link> 
                </button>
                <button className="user-sideBar-btn"> 
                    <Link to={`/user/${userid}/purchase`}>
                    Purchased App
                    </Link>
                </button>
                <button className="user-sideBar-btn"> 
                    <Link to={`/user/${userid}/payment`}>
                    Wallet
                    </Link>
                </button>
                {/* <button className="user-sideBar-btn"> 
                    <Link to={`/user/${userid}/purchase`}>
                    Histroy
                    </Link>
                </button> */}
                <button className="user-sideBar-btn"> 
                    <Link to={`/user/${userid}/passwordUpdate`}>
                    Reset Password
                    </Link>
                </button>
                <button className="user-sideBar-btn"> 
                    <Link to={`/user/${userid}/createApp`}>
                    CreateNewApp
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default UserSideBar;