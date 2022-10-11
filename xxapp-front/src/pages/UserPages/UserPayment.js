import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import UserSideBar from '../../components/userPage/UserSideBar';
import GeneralPayment from "../../components/userPage/GeneralPayment";
import axios from "axios";

const UserPayment = () => {
    const param = useParams();
    const [userid, setUserid] = useState(param.id);
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setUserid(param.id);
            const getUser = await axios.get(`/user/${userid}/payment`);
            const res = await getUser.data;
            setUser(res);
        }
        fetchData();
    }, [])

    return(
        <>
        <UserSideBar />
        <GeneralPayment user={user}/>
        </>
    )
}

export default UserPayment;