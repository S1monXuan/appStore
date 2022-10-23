import React from "react";
import './BasicInfo.css';

const BasicInfo = ({app}) => {
    return(
        <div className="details-basic-info">
            <div className="details-basic-info-top">
                {/* <div className="details-basic-icon">
                    <img src="icon" alt={app.name}/>
                </div> */}
                <div className="details-basic-name">
                    <p>{app.name}</p>
                </div>
                <div className="details-basic-price">
                    <p>Price: {app.price} $</p>
                </div>
            </div>
            <div className="details-basic-info-buttom">
                {/* <div className="details-avg-score">
                    <p>Avg Score: score</p>
                </div> */}
                <div className="details-type">
                    <p>type: {app.type}</p>
                </div>
            </div>
            <div className="details-basic-info-right">
                <div className="details-download-cnt">
                    <p>{app.downloadNum}</p>
                </div>
            </div>
        </div>
    )
}

export default BasicInfo;
