import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import GeneralPurchase from "../../components/userPage/GeneralPurchase";
import UserSideBar from "../../components/userPage/UserSideBar";
import TopBar from "../../components/topBar";

const UserPurchase = () => {
    const param = useParams();
    const [userid, setUserid] = useState(param.id);
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setUserid(param.id);
            let getUser = await fetch(``);
            const res = await getUser.json();
            setUser(res);
        }
        fetchData();
    }, [])

    return(
        <>
        <TopBar />
        <div className="userPage">
        <div className="user-sideBar-container">
            <UserSideBar />
        </div>
        <div className="userInfo-main">
            <GeneralPurchase user={user}/>
        </div>
        </div>
        </>
    )
}

export default UserPurchase;