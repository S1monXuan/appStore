import React from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserSideBar = () => {
    const params = useParams();
    const userid = params.id;
    const navigate = useNavigate();
    
    return(
        <div className="user-sideBar-container">
            <h2>User Menu</h2>
            <div className="user-sideBar">
                <button className="user-sideBar-btn"
                    onClick={() => navigate(`/user/${userid}`)}>
                    {/* <Link to={`/user/${userid}`}> */}
                    General
                    {/* </Link>  */}
                </button>
                <button className="user-sideBar-btn"
                    onClick={() => navigate(`/user/${userid}/purchase`)}> 
                    {/* <Link to={`/user/${userid}/purchase`}> */}
                    Purchased App
                    {/* </Link> */}
                </button>
                <button className="user-sideBar-btn"
                    onClick={() => navigate(`/user/${userid}/payment`)}> 
                    {/* <Link to={`/user/${userid}/payment`}> */}
                    Wallet
                    {/* </Link> */}
                </button>
                {/* <button className="user-sideBar-btn"> 
                    <Link to={`/user/${userid}/purchase`}>
                    Histroy
                    </Link>
                </button> */}
                <button className="user-sideBar-btn"
                    onClick={() => navigate(`/user/${userid}/passwordUpdate`)}> 
                    {/* <Link to={`/user/${userid}/passwordUpdate`}> */}
                    Reset Password
                    {/* </Link> */}
                </button>
                <button className="user-sideBar-btn"
                    onClick={() => navigate(`/user/${userid}/createApp`)}> 
                    {/* <Link to={`/user/${userid}/createApp`}> */}
                    CreateNewApp
                    {/* </Link> */}
                </button>
            </div>
        </div>
    )
}

export default UserSideBar;