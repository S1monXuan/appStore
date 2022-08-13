import React, { useEffect, useState } from 'react';
import SideBar from '../components/indexPage/sideBar';
import AppItems from '../components/indexPage/AppItems';
import { useParams } from 'react-router-dom';

const HomePage = () => {

    let params = useParams();
    // const VerifyAccount = withRouter(this.props) => {
    //     const { token, email } = this.props.match.params;
    //     console.log("toke, email: ", token, email)
    //   };
    const [env, setEnv] = useState('IOS');
    const [type, setType] = useState('');

    useEffect(() => {
            setEnv(params.env)
            setType(params.type)
    }, [params])

    return (
    <div className='HomePage-main'>
        <SideBar />
        <AppItems env={env} type={type}/>
        <p>
            test:
            {env},{type}
            {console.log("con" + env + "; " + type)}
        </p>
    </div>
)}

export default HomePage;