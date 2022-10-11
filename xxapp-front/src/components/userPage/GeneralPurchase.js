import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { GeneralPurchaseAppNameDir } from "./GeneralPurchaseAppNameDir";

const GeneralPurchase = ({user}) => {
    // const purchaseHisDemo = {
    //     "purchasedHistory": [
    //         {
    //             "date": "1997/02/01",
    //             "appId": "app123456789",
    //             "price": 0
    //         },
    //         {
    //             "date": "1997/02/01",
    //             "appId": "app11111111",
    //             "price": 0   
    //         }
    //     ],
    // }

    // const nullDemo = {
    //     "purchasedHistory": [

    //     ],
    // }
    const navigate = useNavigate();
    const ownedAppList = user.ownedApp;
    const applist = [];
    const ownedAppListLoop = () => {
        for(const appid in ownedAppList){
            // console.log(ownedAppList[appid]);
            applist.push(ownedAppList[appid]);
        }
        // console.log(applist);
    }

    ownedAppListLoop();

    const getNameOfList = async (item) => {
        const res = await axios.get(`/details/${item}`);
        // console.log(res.name);
        const ans = await res.name;
        return(
            <p>
                {ans.name}
            </p>
        )
    }
    
    return(
        <div className="purchase-page-container">
            <div className="purchase-page-items">
                <h2>Purchase tem</h2>
                {/* {ownedAppListLoop()} */}
                {/* {console.log(purchaseHisDemo.purchasedHistory.map.length)} */}
                {/* {
                    // user.purchaseHisDemo ?
                    user.ownedApp.map(
                        (item) => 
                        item ? 
                        <div key={item}>
                            {item}
                        </div>
                        :
                        <div> not a purchase </div>
                    )

                } */}
                {
                    applist.length === 0 ? 
                    <div> 
                        You haven't purchase any app yet :)
                    </div>
                    :

                    applist.map(
                        (item) => item ? 
                        <div key={item}
                            onClick = {() => navigate(`/details/${item}`)}
                        > 
                        {/* {getNameOfList(item)}  */}
                        {<GeneralPurchaseAppNameDir id={item}/>}
                        </div>
                        :
                        <div> not a purchase </div>
                    )
                }
            </div>
        </div>
    )
}

export default GeneralPurchase;