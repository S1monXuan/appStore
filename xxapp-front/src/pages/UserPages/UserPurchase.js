import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import GeneralPurchase from "../../components/userPage/GeneralPurchase";
import UserSideBar from "../../components/userPage/UserSideBar";

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
        <UserSideBar />
        <GeneralPurchase user={user}/>
        </>
    )
}

export default UserPurchase;