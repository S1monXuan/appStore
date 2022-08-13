import React,{useEffect, useState} from 'react';
import BasicInfo from '../components/detailPage/BasicInfo';
import BasicOverview from '../components/detailPage/BasicOverview';
import BasicAppInfo from '../components/detailPage/BasicAppInfo';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
    const params = useParams();
    const [appId, setAppId] = useState(params.id);
    const [appDetail, setAppDetail] = useState({});
    console.log('id => ' + params.id);
    
    if(appDetail === undefined){
        setAppId(params.id)
    }

    useEffect(() => {
        const fetchData = async () => {
            setAppId(params.id);
            console.log("id inEffect ==>" + params.id);
            let getres = await fetch(`${appId}`);
            const res = await getres.json();
            setAppDetail(res);
        }
        fetchData();
    }, [appId, params])

    return (
    <div className="details-page">
        <p>details page</p>
        {/* {
            app.map((appl) => 
                console.log(appl),
                <BasicInfo app = {app} key={1}/>,
                <BasicOverview app = {app} key={1}/>,
                <BasicAppInfo app = {app} key={1}/>
            )
        } */}
        {console.log(appDetail)}
        <BasicInfo app={appDetail}/>   
        <BasicOverview app={appDetail}/>
        <BasicAppInfo app={appDetail}/>
        
    </div>
)}

export default DetailPage;