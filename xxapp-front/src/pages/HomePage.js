import React, { useEffect, useState } from 'react';
import SideBar from '../components/indexPage/sideBar';
import AppItems from '../components/indexPage/AppItems';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/topBar';

import './HomePage.css';

const HomePage = () => {
    // let url = window.location.href;
    let params = useParams();
    const navigate = useNavigate();
    // const VerifyAccount = withRouter(this.props) => {
    //     const { token, email } = this.props.match.params;
    //     console.log("toke, email: ", token, email)
    //   };
    const [env, setEnv] = useState('');
    const [type, setType] = useState('');
    const [searchVal, setSearchVal] = useState('');

    // useEffect(() => {
    //         if(env === ''){
    //             setEnv('IOS');
    //         } else {
    //             setEnv(params.env)
    //             setType(params.type)    
    //         }
    // }, [params.env, params.type])

    useEffect(() => {
            setType(params.type)    
    }, [params.type])

    useEffect(() => {
        if(params.env !== undefined){
            setEnv(params.env)    
        }
    }, [params.env])

    useEffect(() => {
        const val = window.location.search.split('=')[1];
        setSearchVal(val);
    }, [<TopBar />])

    // const logOut = () => {
    //     localStorage.removeItem('token');
    //     navigate('/login');
    // }

    return (
    <div className='HomePage-main'>
        <TopBar />
        <div className='HomePage-info'>
        <SideBar />
        {/* <button
            onClick={() => logOut()}
        >
            Log Out
        </button> */}
        <AppItems env={env === undefined ? 'IOS' : env} type={type}/>
        </div>
        {/* <p>{env}, {type} {console.log({env})}</p> */}
    </div>
)}

export default HomePage;