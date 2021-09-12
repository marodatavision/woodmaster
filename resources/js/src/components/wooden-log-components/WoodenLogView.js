import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { WOODEN_LOG_ORDER_API_BASE } from '../../config/baseurls';
import BaseAPI from '../../services/BaseApi';

const WoodenLogView = (props) => {

    // url params
    const { orderId } = useParams();    
    
    // states
    const [woodenLogs, setWoodenLogs] = useState(null);

    useEffect(() => {
        console.log(orderId);
        BaseAPI.show(WOODEN_LOG_ORDER_API_BASE, setWoodenLogs, orderId);
    }, [])

    return (
        <div>
            
            {
                woodenLogs
                ? woodenLogs.map((wl, i) => <div>{wl.id}</div>)
                : null
            }
        </div>
    );
}

export default WoodenLogView;