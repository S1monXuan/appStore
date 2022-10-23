import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom"
import TopBar from "../../components/topBar";
import UserSideBar from "../../components/userPage/UserSideBar";

export const UploadAppFile = () => {
    const params = useParams();
    const navigate = useNavigate();
    
    const [userId, setUserId] = useState(params.id);
    const [appId, setAppId] = useState(params.appId);
    
    const [appInfo, setAppInfo] = useState({});

    const [newapp, setNewapp] = useState('');
    const [progress, setProgress] = useState(0);
    const el = useRef();

    useEffect(() => {
        const getAppInfo = async () => {
            const getinfo = await axios.get(`/user/${userId}/createApp/${appId}`);
            setAppInfo(getinfo.data);
        }
        getAppInfo();
    }, [])

    const handleChange = (e) => {
        setProgress(0);
        const file = e.target.files[0];
        console.log(file);
        setNewapp(file);
        console.log(newapp);
    }

    const uploadFile = () => {
        const formData = new FormData();
        formData.append('uploadFiles', newapp); // appending file
        axios.post(`/user/${userId}/createApp/${appId}`, formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgress(progress);
            }
        }).then(res => {
            console.log({"success": res});
            alert("upload success");
            navigate('/category/IOS');
        }).catch(err => console.log({"error": err}))}   

    return(
        <>
        <TopBar />
        <div className="userPage">
        <div className="user-sideBar-container">
            <UserSideBar />
        </div>
        <div className="userInfo-main">
            <h1>OverView of your app</h1>
            <div>
            <div>
                name:
                <p>{appInfo.name}</p>
            </div>
            <div>
                price:
                <p>{appInfo.price}</p>
            </div>
            <div>
                description:
                <p>{appInfo.description}</p>
            </div>
            <div>
                type:
                <p>{appInfo.type}</p>
            </div>
            <div>
                env:
                <p>{appInfo.env}</p>
            </div>
            <div>
                version:
                <p>{appInfo.name}</p>
            </div>
            </div>

            <input onChange={handleChange} type='file'>
            </input>
            <button
                disabled={!newapp}
                onClick={() => uploadFile()}
            >
                Submit
            </button>
        </div>
        </div>
        </>
    )
}