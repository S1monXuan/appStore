import React, { 
    useEffect,
    useState
 } from "react";
import UserSideBar from '../../components/userPage/UserSideBar';
import GeneralInfo from '../../components/userPage/GeneralInfo';
import { useParams } from "react-router-dom";
import { useToken } from "../Login/auth/useToken";
import { useUser } from "../Login/auth/useUser";
import TopBar from "../../components/topBar";


const UserIndex = () => {
    
    const [token, setToken] = useToken();
    const param = useParams();
    const [userid, setUserid] = useState(param.id);
    const [user, setUser] = useState({});

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    useEffect(() => {
        if (showSuccessMessage || showErrorMessage) {
            setTimeout(() => {
                setShowSuccessMessage(false);
                setShowErrorMessage(false);
            }, 3000);
        }
    }, [showSuccessMessage, showErrorMessage]);

    useEffect(() => {
        const fetchData = async () => {
            setUserid(param.id);
            let getUser = await fetch(``);
            const res = await getUser.json();
            // console.log(res);
            setUser(res);
        }
        fetchData();
    }, [])

    return(
        <>
        <TopBar />
        <UserSideBar />
        {!user.isVerified && <div className="fail">You need to verify your email</div>}
        {showSuccessMessage && <div className="success">Successfully saved user data!</div>}
        {showErrorMessage && <div className="fail">Uh oh... something went wrong and we couldn't save changes</div>}
        <GeneralInfo user={user}/>
        {/* <div>{console.log(user)}</div> */}
        </>
    )
}

export default UserIndex;