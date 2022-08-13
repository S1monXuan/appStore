import React from "react";

const UserSideBar = () => {
    return(
        <div className="user-sideBar-container">
            <div className="user-sideBar">
                <button className="user-sideBar-btn"> 
                    General
                </button>
                <button className="user-sideBar-btn"> 
                    Purchased App
                </button>
                <button className="user-sideBar-btn"> 
                    Wallet
                </button>
                <button className="user-sideBar-btn"> 
                    Histroy
                </button>
                <button className="user-sideBar-btn"> 
                    Reset Password
                </button>
            </div>
        </div>
    )
}

export default UserSideBar;