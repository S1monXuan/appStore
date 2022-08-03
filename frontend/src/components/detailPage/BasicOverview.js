import React from "react";

const BasicOverview = ({app}) => {
    return(
        <div className="details-app-description">
            <h2>Overview:</h2>
            <p>{app.overview}</p>
        </div>

        
    )
}

export default BasicOverview;