import React from "react";

const GeneralPayment = ({user}) => {
    return(
        <div className="payment-page-container">
            <div className="payment-detail">
                <h1> Payment Management </h1>
                <h2> Current Balance: </h2>
                <p className="payment-currence"> ${user.balance}</p>
                <button>
                    Add Balance
                </button>
            </div>
        </div>
    )
}

export default GeneralPayment;