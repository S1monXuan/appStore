import React from "react";

import TopBar from "./components/topBar";
import SideBar from "./components/indexPage/sideBar";
import AppItems from "./components/indexPage/AppItems";
import BasicInfo from "./components/detailPage/basicInfo";
import DetailPage from "./components/detailPage/DetailPage";
import GeneralInfo from "./components/userPage/GeneralInfo";
import UserSideBar from "./components/userPage/UserSideBar";

const App = () => (
    <div className= "App">
        {/* <p>test</p>
        <TopBar loginName="null"/> */}
        {/* <div> sideBar </div>
        <SideBar /> */}
        {/* <div>appItems</div>
        <AppItems /> */}
        {/* <BasicInfo /> */}
        {/* <DetailPage /> */}
        <UserSideBar />
        <GeneralInfo />
        
    </div>
);

export default App;