import React from "react";

const BasicAppInfo = ({app}) => {
    return(
        <div className="details-app-info">
            <h2>App Info</h2>
            <div className="details-app-info-version">
                <h3>version:</h3>
                <p>{app.version}</p>
            </div>
            <div className="details-app-info-updated">
                <h3>updated at:</h3>
                <p>{app.updateddate}</p>
            </div>
            <div className="details-app-info-size">
                <h3>size:</h3>
                <p>{app.size}</p>
            </div>
            <div className="details-app-info-language">
                <h3>language:</h3>
                {
                    app.language.map((lang) =>
                        <p>{lang}</p>
                    )
                }
            </div>
            <div className="details-app-info-publisher">
                <h3>publisher:</h3>
                <p>{app.publisher}</p>
            </div>
        </div>
    )
}

export default BasicAppInfo;