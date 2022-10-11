import React from "react";

const GeneralAccountInfo = ({user}) => {


    return(
        <div className="general-account-info">
            <div>
                <h2>Account Info</h2>
                <p className="general-account-info-user-id">User Id: {user._id}</p>
                <p className="general-account-info-user-name">Name: {user.name}</p>
                <p className="general-account-info-user-email">Email: {user.email}</p>
            </div>
        </div>
    )
}

export default GeneralAccountInfo;