
import { useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';


export const UserAccountDeleteConfirm = () => {
    const param = useParams();
    const [userId, ] = useState(param.id);
    const navigate = useNavigate();

    const confirmDelete = async() => {
        try {
            const response = await axios.get(`/user/${userId}/deleteConfirm`);
            // console.log(response);
            alert('delete success, bye');
            navigate('/login');
        } catch (e) { 
            alert({msg: e});
            navigate(`/user/${userId}`)
        }
    }

    return(
        <div>
            <h1>Delete Account Confirm</h1>
            <p>Really want to delete account?</p>
            <button
                onClick={() => confirmDelete()}
            >
                Confirm
            </button>
            <button
                onClick={() => navigate(`/user/${userId}`)}
            >
                No, I do it accidently
            </button>
        </div>
    )
}