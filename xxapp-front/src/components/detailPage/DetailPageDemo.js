import React from "react";
import BasicAppInfo from "./BasicAppInfo";
import BasicInfo from "./basicInfo";
import './basicInfo.css';
import BasicOverview from "./BasicOverview";

const DetailPage = ({app}) => {
    app = {
            "icon": "appIcon",
            "name": "appName",
            "type": "app Type",
            "downloadNum": 15,
            "prices": 0,
            "overview": "test description of app",
            "version": "1.0.0",
            "updateddate":"2020-02-01",
            "size": "1kb",
            "language": ["English", "Chinese"],
            "publisher": "testUser1-should be id here"
    }
    
    return(
        <div className="details-page">
            <BasicInfo app = {app}/>
            <BasicOverview app = {app}/>
            <BasicAppInfo app = {app}/>
        </div>
    )
}

export default DetailPage;