import React,{ useState} from "react";
import { useParams } from "react-router-dom";
import UserSideBar from "../../components/userPage/UserSideBar";
import TopBar from "../../components/topBar";

const PasswordUpdate = () => {
    const param = useParams();
    const [userid, setUserid] = useState('');
    const [user, setUser] = useState('');

    const[curpwd, setCurpwd] = useState('');
    const[newpwd, setNewpwd] = useState('');
    const[reppwd, setReppwd] = useState('');

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setUserid(param.id);
    //         let getUser = await fetch(`../${userid}`);
    //         const res = await getUser.json();
    //         setUser(res);
    //     }
    //     fetchData();
    // }, [param.id])

    const UpdatePassword = async () => {
        setUserid(param.id);
        if(newpwd === '' || newpwd === '' || reppwd === ''){
            alert('password can not be null');
        }else if(newpwd !== reppwd){
            alert('new password and repeat password do not match');
        } else {
            const result = await fetch('', {
                method: 'post',
                body: JSON.stringify({inputpwd: curpwd, newpwd: newpwd}),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const body = await result.json();
            console.log(body.error);
            setUserid(param.id);
            if(body.error === "wrong current password"){
                alert('ERROR: wront input password');
            } else {
                //UpdatePassword(body);
                alert('reset password successful');
            }
        }
        setCurpwd('');
        setNewpwd('');
        setReppwd('');
    }

    return(
        <>
        <TopBar />
        <div className="userPage">
        <div className="user-sideBar-container">
            <UserSideBar />
        </div>
        <div className="userInfo-main">
            <div className="user-pwdupdate"> 
            <h1>PASSWORD UPDATE</h1>
            <label>
                Current Password:
                <input type='password' value={curpwd} onChange={(event) => setCurpwd(event.target.value)}/>
            </label>
            <label>
                New Password:
                <input type='password' value={newpwd} onChange={(event) => setNewpwd(event.target.value)}/>
            </label>
            <label>
                Repeat New Password:
                <input type='password' value={reppwd} onChange={(event) => setReppwd(event.target.value)}/>
            </label>
            <button onClick={() => UpdatePassword()}>
                Update Password
            </button>
        </div>
        </div>
        </div>
        </>
    )
}

export default PasswordUpdate;