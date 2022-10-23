import React,{ useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import TopBar from "../../components/topBar";
import UserSideBar from "../../components/userPage/UserSideBar";


const AccountInfoUpdate = () => {
    const param = useParams();
    const [userid, setUserid] = useState('');
    const [user, setUser] = useState({});

    const[name, setName] = useState(user.name);
    const[email, setEmail] = useState(user.email);

    useEffect(() => {
        const fetchData = async () => {
            setUserid(param.id);
            let getUser = await fetch(``);
            const res = await getUser.json();
            setUser(res);
        }
        fetchData();
    }, [])

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
    }, [user])

    const UpdateAccInfo = async () => {
        const result = await fetch('', {
            method: 'post',
            body: JSON.stringify({name: name, email: email}),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        // UpdateAccInfo(body);
    };

    return(
        <>
        <TopBar />
        <div className="userPage">
        <div className="user-sideBar-container">
            <UserSideBar />
        </div>
        <div className="userInfo-main">
            <div className="user-pwdupdate"> 
            <h1>UserAccount UPDATE</h1>
            <label>
                Name:
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
            </label>
            <label>
                Email:
                <input type='text' value={email} onChange={(event) => setEmail(event.target.value)}/>
            </label>
            <a href={"../../user/" + userid}>
                <button onClick={() => {UpdateAccInfo()}}>
                    Update Account Info
                </button>
            </a>
            </div>
        </div>
        </div>
        </>
    )
}

export default AccountInfoUpdate;