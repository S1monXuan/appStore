import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './sideBar.css'

const SideBar = ({types = ["IOS", "Android"], categories = ["recommend", "news", "game", "shopping"]}) => {
    const [searchName, setSearchName] = useState('');
    const [searchOutput, setSearchOutput] = useState('searchOutput');
    const [typeNow, setTypeNow] = useState('IOS');
    const [searchVal, setSearchVal] = useState('');

    const putValIntoHtml = () => {
        var params = new URLSearchParams();
        params.append("search", searchName);
        
        window.location.href = window.location.href.split('?')[0] +"?" + params.toString();
    }


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
                        putValIntoHtml();
                        }
                    }
                >
                    Search
                </button>
                {
                    types.map((type) => 
                        <div className="sideBar-main-type" 
                            key={type}
                            onClick={() => {
                                setTypeNow(type)
                            }}
                            > <Link to={`/category/${type}`}>{ type }</Link> </div>
                    )
                }
            </div>
            <div>----------</div>
            <div className="sideBar-category-type">
                {
                    categories.map((category) => 
                        <div className="sideBar-category" key={category}> <Link to={`/category/${typeNow}/${category}`}>{ category }</Link> </div>
                    )
                }
            </div>
        </div>
    )
}

export default SideBar;