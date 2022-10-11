import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const GeneralActiveBtn = ({user}) => {
    const params = useParams();
    const navigate = useNavigate();
    return(
        <div className="general-active-btn-container">
            <div>
                <button className="general-active-edit-btn"> <Link to='accountinfoUpdate'>Edit</Link></button>
                <button className="general-active-del-btn" onClick={() => navigate(`/user/${[params.id]}/deleteConfirm`)}>Del</button>
            </div>
        </div>
    )
}

export default GeneralActiveBtn;