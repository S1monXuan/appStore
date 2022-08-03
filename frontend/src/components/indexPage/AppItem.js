import React from "react";
import './AppItem.css';

const AppItem = ({item}) => {
    return(
        <div className="mainindex-app-item">
            <img src={item.icon} alt={item.name}/>
            <div className="mainindex-app-item-name">
                <p>{item.name}</p>
            </div>
            <div className="mainindex-app-item-rate">
                <p>{item.rate}</p>
            </div>
        </div>
    )
}

export default AppItem;
