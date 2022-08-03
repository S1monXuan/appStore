import React from "react";
import './AppItems.css';
import AppItem from "./AppItem";

const AppItems = ({appLists}) => {
    
    appLists = [{
        "icon": "icon",
        "name": "testApp",
        "rate": 3.5
    },
    {
        "icon": "icon2",
        "name": "testApp2",
        "rate": 4
    }]

    return (
        <div>
            {
                appLists.map((list) => 
                    <AppItem item = {list}/>
                )
            }
        </div>
    )
}

export default AppItems;