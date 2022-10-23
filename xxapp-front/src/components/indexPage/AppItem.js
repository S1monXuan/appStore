import React from "react";
import { Link } from "react-router-dom";
import './AppItem.css';

const AppItem = ({item}) => {
    return(
        <div className="mainindex-app-item">
            <Link to={`/details/${item._id}`}>
                {/* <img src={item.icon} alt={item.name}/> */}
                <div className="mainindex-app-item-name">
                    <p>Name: {item.name}</p>
                </div>
                <div className="mainindex-app-item-rate">
                    <p>{item.rate}</p>
                </div>
                <p>Price: {item.price} $ </p>
            </Link>
        </div>
    )
}

export default AppItem;
