import React, { useState,useEffect } from "react";
import './sideBar.css'

const SideBar = ({types = ["IOS", "Android"], categories = ["Recommend", "News", "Game"]}) => {
    const [searchName, setSearchName] = useState('');
    const [searchOutput, setSearchOutput] = useState('searchOutput');
    return(
        <div className="sideBar">
            {/* <div> {searchOutput} </div> */}
            <div className="sideBar-search">
                <input 
                    className="sideBar-nav-input"
                    type="text"
                    placeholder="Type app name"
                    value={searchName}
                    onChange={e => setSearchName(e.target.value)}/>
                <button
                    onClick={() => {
                        setSearchOutput(searchName);
                        setSearchName('');
                        }
                    }
                >
                    Search
                </button>
                {
                    types.map((type) => 
                        <div className="sideBar-main-type" key={type}> { type } </div>
                    )
                }
            </div>
            <div>----------</div>
            <div className="sideBar-category-type">
                {
                    categories.map((category) => 
                        <div className="sideBar-category" key={category}> {category} </div>
                    )
                }
            </div>
        </div>
    )
}

export default SideBar;