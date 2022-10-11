import React from "react";
import GeneralAccountInfo from "./GeneralAccountInfo";
import GeneralActiveBtn from "./GeneralActiveBtn";
import GeneralPayment from "./GeneralPayment";
import GeneralPurchase from "./GeneralPurchase";

const GeneralInfo = ({user}) => {
    

    // const userDemo = {
    //     "id": "id-123456789",
    //     "name": "user name 1",
    //     "pwd": "pwd-need-en",
    //     "balance": 5,
    //     "email": "test@test.com",
    //     "uploadApp": [],
    //     "purchasedHistory": [],
    // }
    return(
        <div className="general-info">
            <GeneralAccountInfo user={user}/>
            <GeneralActiveBtn user={user}/>
            <GeneralPayment user={user}/>
            <GeneralPurchase user={user}/>
        </div>
    )
}

export default GeneralInfo;