import React from "react";
import GeneralAccountInfo from "./GeneralAccountInfo";
import GeneralActiveBtn from "./GeneralActiveBtn";
import GeneralPayment from "./GeneralPayment";
import GeneralPurchase from "./GeneralPurchase";

const GeneralInfo = () => {
    const userDemo = {
        "id": "id-123456789",
        "name": "user name 1",
        "pwd": "pwd-need-en",
        "balance": 5,
        "email": "test@test.com",
        "uploadApp": [],
        "purchasedHistory": [],
    }
    return(
        <div className="general-info">
            <GeneralAccountInfo user={userDemo}/>
            <GeneralActiveBtn user={userDemo}/>
            <GeneralPayment user={userDemo}/>
            <GeneralPurchase user={userDemo}/>
        </div>
    )
}

export default GeneralInfo;