import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"


export const UploadAppFile = () => {
    const params = useParams();
    const navigate = useNavigate();
    
    const [userId, setUserId] = useState(params.id);
    const [appId, setAppId] = useState(params.appId);
    
    const [appInfo, setAppInfo] = useState({});

    useEffect(() => {
        const getAppInfo = async () => {
            const getinfo = await axios.get(`/user/${userId}/createApp/${appId}`);
            setAppInfo(getinfo.data);
        }
        getAppInfo();
    }, [])

    const uploadApp = async () => {
        
    }

    return(
        <div>
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

            <button
                onClick={() => uploadApp()}
            >Upload your Application</button>
        </div>
    )
}