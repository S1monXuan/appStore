import React from "react";

const BasicOverview = ({app}) => {
    return(
        <div className="details-app-description">
            <h2>About this app:</h2>
            <p>{app.description}</p>
        </div>

        
    )
}

export default BasicOverview;