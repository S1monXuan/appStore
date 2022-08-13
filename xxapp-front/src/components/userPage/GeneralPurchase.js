import React from "react";

const GeneralPurchase = ({user}) => {
    const purchaseHisDemo = {
        "purchasedHistory": [
            {
                "date": "1997/02/01",
                "appId": "app123456789",
                "price": 0
            },
            {
                "date": "1997/02/01",
                "appId": "app11111111",
                "price": 0   
            }
        ],
    }

    const nullDemo = {
        "purchasedHistory": [

        ],
    }
    
    return(
        <div className="purchase-page-container">
            <div className="purchase-page-items">
                <h2>Purchase Item</h2>
                {console.log(purchaseHisDemo.purchasedHistory.map.length)}
                {
                    // user.purchaseHisDemo ?
                    nullDemo.purchasedHistory.map(
                        (item) => 
                        item.appId ? 
                        <div>
                            {item.date}
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