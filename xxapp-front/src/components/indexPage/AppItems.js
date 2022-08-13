import React, { useEffect, useState } from "react";
import './AppItems.css';
import AppItem from "./AppItem";

const AppItems = ({env, type}) => {
    
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
                res = await fetch(`${type}`);
            } else {
                res = await fetch(`${env}`);
            }
            // console.log(res);
            const body = await res.json();
            setAppLists(body);
        }
        fetchData();
    }, [env, type])

    return (
        <div>
            {
                appLists.length !== 0 ? 
                    appLists.map((list) => 
                    <AppItem 
                        item = {list} 
                        key={list._id}
                    />
                    )
                :
                    <div> Does not have any app yet</div>
            }
        </div>
    )
}

export default AppItems;