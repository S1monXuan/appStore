import React, {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserSideBar from '../../components/userPage/UserSideBar';
import axios from "axios";
import TopBar from "../../components/topBar";


const UserPaymentAdd = () => {
    const navigate = useNavigate();
    const param = useParams();
    const [userid, setUserid] = useState(param.id);
    const [user, setUser] = useState({});
    const [amount, setAmount] = useState(0);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setUserid(param.id);
    //         const getUser = await axios.post(`/user/${userid}/payment/add`);
    //         const res = await getUser.data;
    //         setUser(res);
    //     }
    //     fetchData();
    // }, [])

    const UpdateBalanceInfo = async () => {
        await axios.post(`/user/${userid}/payment/add`,{
            moneyAmount: amount
        });
        navigate(`/user/${userid}`);
    } 

    return(
        <>
        <TopBar />
        <div className="userPage">
        <div className="user-sideBar-container">
            <UserSideBar />
        </div>
        <div className="userInfo-main">
            <h1>Balance UPDATE</h1>
            <label>
                Money you want to add:
                <input type='text' value={amount} onChange={(event) => setAmount(event.target.value)}/>
            </label>
            <button onClick={() => {UpdateBalanceInfo()}}>
                Add money
            </button>
            </div>
        </div>
        </>
    )
}

export default UserPaymentAdd;