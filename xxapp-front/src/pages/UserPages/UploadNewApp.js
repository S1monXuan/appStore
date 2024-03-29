import axios from "axios";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserSideBar from "../../components/userPage/UserSideBar";
import TopBar from "../../components/topBar";

import "./UploadNewApp.css";

export const UploadNewApp = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [userId, setUserId] = useState(params.id);

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [version, setVersion] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [env, setEnv]= useState('');

    const [typeAll, setTypeAll] = useState([]);
    const [iosChecked, setIosChecked] = useState(false);
    const [andChecked, setAndChecked] = useState(false);

    useEffect(() =>{
        const getType = async () => {
            let getTypes = await fetch(``);
            const res = await getTypes.json();
            const typeRes = [];
            res.forEach(element => {
                typeRes.push(element.type);
            });
            setTypeAll(typeRes);
        }
        getType();
    }, [])

    useEffect(() => {
        if(iosChecked){
            setAndChecked(false);
        }
    }, [iosChecked])

    useEffect(() => {
        if(andChecked){
            setIosChecked(false);
        }
    }, [andChecked])

    const uploadApp = async () => {
        const response = await axios.post(`/user/${userId}/createApp`, 
        {
            name: name,
            price: price,
            version: version,
            description: description,
            type: type,
            env: env,
        });
        const { appId } = response.data;
        // console.log(appId)
        navigate(`/user/${userId}/createApp/${appId}`)
    }

    return(
        <>
        <TopBar />
        <div className="userPage">
        <div className="user-sideBar-container">
            <UserSideBar />
        </div>
        <div className="userInfo-main">
            <h1>Upload New App( Or File )</h1>
            <label>
                Name:
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
            </label>
            <label>
                Price:
                <input type='text' value={price} onChange={(event) => setPrice(parseInt(event.target.value))}/>
            </label>
            <label>
                Version:
                <input type='text' value={version} onChange={(event) => setVersion(event.target.value)}/>
            </label>
            <label>
                description:
                <input type='text' value={description} onChange={(event) => setDescription(event.target.value)}/>
            </label>
            <label className="type-select">
                Env: <br />
                IOS <input type='radio' value='IOS' onChange={() => setEnv('IOS')} checked={iosChecked} onClick={()=> setIosChecked(!iosChecked)}/>
                Android <input type='radio' value='Android' onChange={() => setEnv('Android')} checked={andChecked} onClick={()=> setAndChecked(!andChecked)}/>                
            </label>
            <label>
                SelectType:
                <div>You selected: {type}</div>
                <ol>
                {
                    typeAll.map(
                        (element) => 
                        <li key={element} onClick={() => setType(element)}> {element} </li>
                    )
                }
                </ol>
            </label>
            <button
                onClick={() => uploadApp()}
            >
                Upload App
            </button>
        </div>
        </div>
        </>
    )
}