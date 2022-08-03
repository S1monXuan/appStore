import React from "react";

const GeneralActiveBtn = ({user}) => {

    return(
        <div className="general-active-btn-container">
            <div>
                <button className="general-active-edit-btn">Edit</button>
                <button className="general-active-del-btn">Del</button>
            </div>
        </div>
    )
}

export default GeneralActiveBtn;