import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const GeneralPayment = ({user}) => {
    const param = useParams();
    const userid = param.id;
    const navigate = useNavigate();
    return(
        <div className="payment-page-container">
            <div className="payment-detail">
                <h1> Payment Management </h1>
                <h2> Current Balance: </h2>
                <p className="payment-currence"> ${user.balance}</p>
                <button
                    onClick={() => navigate(`/user/${userid}/payment/add`)}
                >
                    Add Balance
                </button>
            </div>
        </div>
    )
}

export default GeneralPayment;