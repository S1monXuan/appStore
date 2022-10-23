import React,{useEffect, useState} from 'react';
import BasicInfo from '../components/detailPage/BasicInfo';
import BasicOverview from '../components/detailPage/BasicOverview';
import BasicAppInfo from '../components/detailPage/BasicAppInfo';
import { useParams } from 'react-router-dom';
import TopBar from '../components/topBar';
import axios from 'axios';

import './DetailPage.css';

const DetailPage = () => {
    const params = useParams();
    const [appId, setAppId] = useState(params.id);
    const [appDetail, setAppDetail] = useState({});
    // console.log('id => ' + params.id);
    
    if(appDetail === undefined){
        setAppId(params.id)
    }

    useEffect(() => {
        const fetchData = async () => {
            setAppId(params.id);
            // console.log("id inEffect ==>" + params.id);
            let getres = await fetch(`${appId}`);
            const res = await getres.json();
            setAppDetail(res);
        }
        fetchData();
    }, [appId, params])

    const downloadClick = async () => {
        try{
            const dir = await axios.post(`/details/${appId}/download`
            ,{responseType: 'blob'}
            ).then(function (response){
                var blob = new Blob([response.data]);
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement("a");
                a.href = url;
                a.download = appDetail.name;
                a.click();
                window.URL.revokeObjectURL(url);
            });
            console.log(dir);
        } catch (e) {
            console.log(e);
        }
    }

    return (
    <div className="details-page">
        <TopBar />
        <div className='btn-choose'>
            <h1>{appDetail.name}</h1>
            {/* {
                app.map((appl) => 
                    console.log(appl),
                    <BasicInfo app = {app} key={1}/>,
                    <BasicOverview app = {app} key={1}/>,
                    <BasicAppInfo app = {app} key={1}/>
                )
            } */}
            <div className='conduct-operations'>
                {/* <button> purchase </button> */}
                <button className='download-btn' onClick={() => downloadClick()}> download </button>
            </div>
        </div>
        <div className='basic-div'>
            <div className='basic-div-left'>
                <BasicInfo app={appDetail}/>   
                <BasicOverview app={appDetail}/>
            </div>
            <div className='basic-div-right'>
                <BasicAppInfo app={appDetail}/>
            </div>
        </div>
    </div>
)}

export default DetailPage;