import { useEffect, useState } from "react";
import axios from "axios";

export const GeneralPurchaseAppNameDir = ({id}) => {

    const [idName, setIdName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            let res = [];
            res = await axios(`/details/${id}`);
            // console.log(res);
            const body = await res.data.name;
            setIdName(body);
        }
        fetchData();
    }, [id])

    return(
        <div>
            {idName}
        </div>
    )
}