import React, { useEffect, useState } from "react";
import './AppItems.css';
import AppItem from "./AppItem";

const AppItems = ({env, type}) => {
    var variables = window.location.search;
    // const appLists = [{
    //     "icon": "icon",
    //     "name": "testApp",
    //     "rate": 3.5
    // },
    // {
    //     "icon": "icon2",
    //     "name": "testApp2",
    //     "rate": 4
    // }]
    const [appLists, setAppLists] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let res = [];
            if( type ){
                res = await fetch(`${type}/${variables}`);
            } else if(env) {
                res = await fetch(`${env}/${variables}`);
            } else {
                res = await fetch(`/category/IOS/${variables}`)
            }
            // console.log(res);
            const body = await res.json();
            setAppLists(body);
        }
        fetchData();
    }, [env, type])

    return (
        <div className="appitems">
            {
                appLists.length !== 0 ? 
                    appLists.map((list) => 
                    <AppItem 
                        item = {list} 
                        key={list._id}
                    />
                    )
                :
                    <div className="search-null"> <h1 className="search-null-p">Sry, Does not have any app yet</h1> </div>
            }
        </div>
    )
}

export default AppItems;